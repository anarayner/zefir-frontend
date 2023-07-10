import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {extractLoginData, initAuth, login, loginFailed, loginSuccess, logout, logoutSuccess} from "./auth.actions";
import {catchError, distinctUntilChanged, finalize, fromEvent, map, of, skip, switchMap, tap} from "rxjs";
import {AuthService} from "../services/auth.service";
import {AuthData} from "./auth.reducer";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap(action => this.authService.login({
      email: action.email,
      password: action.password
    }).pipe(
      map((data) => loginSuccess({authData: data})),
      finalize(() => console.log('loginSuccess')),
      catchError((error) => of(loginFailed({ error: error.message }))),
    ))
  ))

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logout),
    map(() => {
      localStorage.removeItem('authData')
      return logoutSuccess()
    })
  ))

  saveAuthDataToLocalStorage$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccess),
    tap((data ) => {
      localStorage.setItem('authData', JSON.stringify(data.authData));
    })
  ), { dispatch: false });

  extractLoginData$ = createEffect(() => this.actions$.pipe(
    ofType(initAuth, extractLoginData),
    map(() => {
      const authDataString = localStorage.getItem('authData');
      if (!authDataString) {
        return logoutSuccess();
      }
      const authData: AuthData = JSON.parse(authDataString);
      const isTokenExpired = this.jwtHelper.isTokenExpired(authData.refreshToken)
      if(isTokenExpired){
        return logoutSuccess();
      }
      return loginSuccess({authData})
    })
  ))

  listenStorageEffect$ = createEffect(() => this.actions$.pipe(
    ofType(initAuth),
    switchMap(() => fromEvent(window, 'storage')),
    map(() => extractLoginData())
  ));

  listenAuthEffect$ = createEffect(() => this.actions$.pipe(
    ofType(initAuth),
    switchMap(() => this.authService.isAuth$),
    distinctUntilChanged(),
    skip(1),

    tap(isAuthorized => {
      console.log('isAuthorized', isAuthorized);
      this.router.navigateByUrl(
        isAuthorized ? '' : '/login'
      );
    })

  ), {dispatch: false})

  constructor(private actions$: Actions, private authService: AuthService, public jwtHelper: JwtHelperService, private router: Router

  ) {}
}
