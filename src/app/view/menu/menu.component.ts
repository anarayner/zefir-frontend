import { Component } from '@angular/core';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {Observable} from "rxjs";
import {isAuth} from "../../store/auth-store/store/auth.selectors";
import {Store} from "@ngrx/store";
import {AsyncPipe, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {logout} from "../../store/auth-store/store/auth.actions";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    NgIf,
    AsyncPipe,
    RouterLink
  ],
  standalone: true
})
export class MenuComponent {
  isAuth$: Observable<boolean> = this.store.select(isAuth)
  constructor(private store: Store) {
  }

  onLogout() {
     this.store.dispatch(logout())
  }

}
