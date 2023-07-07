import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {isAuth} from "@store/auth-store/store/auth.selectors";
import {Store} from "@ngrx/store";
import {logout} from "@store/auth-store/store/auth.actions";


@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.css'],
})
export class HeaderBlockComponent {

  isAuth$: Observable<boolean> = this.store.select(isAuth)
  constructor(private store: Store) {
  }

  onLogout() {
    this.store.dispatch(logout())
  }
}
