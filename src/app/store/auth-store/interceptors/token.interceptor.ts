import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {TokenRefreshService} from "../services/token-refresh.service";
import {AuthData} from "../store/auth.reducer";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, public jwtHelper: JwtHelperService, private tokenRefreshService: TokenRefreshService) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authDataString = localStorage.getItem('authData');
    const authData: AuthData = authDataString ? JSON.parse(authDataString) : null;

    if (authData) {
      request = this.addAuthorizationHeader(request, authData.accessToken);
    }

    return next.handle(request).pipe(
      catchError(error => {
        if(!authData){
          return throwError(error)
        }
        const isTokenExpired = this.jwtHelper.isTokenExpired(authData.refreshToken)
        console.log('isTokenExpired', isTokenExpired)
        if(error.status === 401 && authData.refreshToken && !isTokenExpired){
          console.log("ERROR")
          return this.refreshTokenAndRetry(request, next, authData.refreshToken);
        }
        return throwError(error)
      })
    )
  }

  private addAuthorizationHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private refreshTokenAndRetry(request: HttpRequest<any>, next: HttpHandler, refreshToken: string): Observable<HttpEvent<any>> {
    return this.tokenRefreshService.refreshToken(refreshToken).pipe(
      switchMap((response: any) => {

        if(response){
          localStorage.setItem('authData', JSON.stringify(response));

          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${response.accessToken}`
            }
          })
        }
        return next.handle(request);
      })
    );
  }
}
