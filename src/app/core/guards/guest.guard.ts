import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject, Injectable} from "@angular/core";
import {first, map, Observable} from "rxjs";
import {AuthService} from "@app/auth/services/auth.service";

@Injectable({
  providedIn: 'root'
})
class PermissionsService {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.getIsGuest()
  }

  private getIsGuest() {
    return this.authService.isGuest$.pipe(
      first(),
      map(isGuest => {
        if(!isGuest){
          this.router.navigateByUrl('').then();
          return false
        }
        return isGuest
      })
    )
  }
}

export const GuestGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean => {
  return inject(PermissionsService).canActivate(next, state);
}
