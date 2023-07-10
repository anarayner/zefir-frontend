import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {Store} from "@ngrx/store";
import {Observable, tap} from "rxjs";
import {AuthData} from "../store/auth.reducer";
import {loginSuccess} from "../store/auth.actions";

@Injectable({
  providedIn: 'root'
})
export class TokenRefreshService {

  constructor(private authService: AuthService, private store: Store) {}

  refreshToken(refreshToken: string): Observable<AuthData> {
    return this.authService.refresh({ refreshToken }).pipe(
      tap((data: any) => {
        this.store.dispatch(loginSuccess({ authData: data })); // Диспатч действия loginSuccess с обновленными данными authData
      })
    );
  }
}
