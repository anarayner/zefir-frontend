import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {initAuth, login, loginFailed, loginSuccess, logoutSuccess} from "./auth.actions";
import {catchError, finalize, map, of, switchMap, tap} from "rxjs";
import {AuthService} from "../services/auth.service";
import {AuthData} from "./auth.reducer";
import {JwtHelperService} from "@auth0/angular-jwt";

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

  saveAuthDataToLocalStorage$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccess),
    tap((data ) => {
      localStorage.setItem('authData', JSON.stringify(data.authData));
    })
  ), { dispatch: false });

  extractLoginData$ = createEffect(() => this.actions$.pipe(
    ofType(initAuth),
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

  constructor(private actions$: Actions, private authService: AuthService, public jwtHelper: JwtHelperService
    ) {}
}
