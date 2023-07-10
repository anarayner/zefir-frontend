import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject, Injectable} from "@angular/core";
import {combineLatest, map, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AuthService} from "@app/auth/services/auth.service";

@Injectable({
  providedIn: 'root'
})
class PermissionsService {

  constructor(private router: Router, private authService: AuthService, private store: Store) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.getIsAuth()
  }

  private getIsAuth() {
    // console.log('getIsAuth WORK')
    return combineLatest([
      this.authService.isAuth$,
      this.authService.isAuthLoaded$
    ]).pipe(
      map(([isAuth, isAuthLoaded]) => {
        if(isAuth && isAuthLoaded){
          return true
        } else {
          this.router.navigate(['/login']).then()
          return false
        }
      })
    )
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean => {
  return inject(PermissionsService).canActivate(next, state);
}
