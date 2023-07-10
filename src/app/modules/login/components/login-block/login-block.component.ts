import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {
  isAuth,
  selectAuthError,
  selectAuthLoaded,
  selectAuthLoading
} from "@app/auth/store/auth.selectors";
import {login} from "@app/auth/store/auth.actions";
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {LoginFormUiComponent} from "@app/modules/login/components/login-form-ui/login-form-ui.component";

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    LoginFormUiComponent
  ]
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

  constructor(private store: Store, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.isAuth$.subscribe(value => {
      console.log('IS_AUTH', value);
    });
  }
}
