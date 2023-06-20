import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {
  isAuth,
  selectAuthError,
  selectAuthLoaded,
  selectAuthLoading
} from "../../../../store/auth-store/store/auth.selectors";
import {login} from "../../../../store/auth-store/store/auth.actions";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.css']
})
export class LoginBlockComponent implements OnInit{

  loading$: Observable<boolean> = this.store.select(selectAuthLoading)
  loaded$: Observable<boolean> = this.store.select(selectAuthLoaded)
  error$: Observable<string> = this.store.select(selectAuthError)
  isAuth$: Observable<boolean> = this.store.select(isAuth)



  onLogin(value: {email: string, password: string}) {
    console.log('OnLogin', value)
    this.store.dispatch(login(value))
  }

  testProfile() {
    this.httpClient.get('http://localhost:5000/users')
      .subscribe(console.log);
  }

  refresh() {
    this.httpClient.get('http://localhost:5000/auth/refresh')
      .subscribe(console.log);
  }

  constructor(private store: Store, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.isAuth$.subscribe(value => {
      console.log('IS_AUTH', value);
    });
  }

}
