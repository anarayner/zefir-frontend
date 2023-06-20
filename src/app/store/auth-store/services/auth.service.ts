import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthData} from "../store/auth.reducer";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly accessTokenKey = 'accessToken';
  private readonly refreshTokenKey = 'refreshToken';
  private readonly userIdKey = 'userId';



  constructor(private httpClient: HttpClient) { }

  login(body: {email: string, password: string}){
    return this.httpClient.post<AuthData>('http://localhost:5000/auth/signin', body)
  }


  refresh(data: {refreshToken: string}){
    return this.httpClient.post('http://localhost:5000/auth/refresh', data)
  }

  setTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem(this.accessTokenKey, accessToken);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }

  setRefreshToken(token: string): void {
    localStorage.setItem(this.refreshTokenKey, token);
  }

}
