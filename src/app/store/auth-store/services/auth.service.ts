import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthData} from "../store/auth.reducer";
import {select, Store} from "@ngrx/store";
import {selectAuthData, selectAuthLoaded} from "../store/auth.selectors";
import {filter, first, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth$ = this.store.pipe(
    select(selectAuthData),
    filter(authData => authData !== undefined),
    map(authData =>  !!authData)
  )

  isGuest$ = this.isAuth$.pipe(
    map(isAuth => !isAuth)
  );

  isAuthLoaded$ = this.store.pipe(
    select(selectAuthLoaded)
  );
  constructor(private httpClient: HttpClient, private store: Store) { }

  login(body: {email: string, password: string}){
    return this.httpClient.post<AuthData>('http://localhost:5000/auth/signin', body)
  }

  refresh(data: {refreshToken: string}){
    return this.httpClient.post('http://localhost:5000/auth/refresh', data)
  }

  logout(data: {userId: string}){
    return this.httpClient.post<AuthData>('http://localhost:5000/auth/logout', data)
  }


}
