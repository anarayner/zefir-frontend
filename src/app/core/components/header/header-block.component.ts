import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {isAuth} from "@app/auth/store/auth.selectors";
import {Store} from "@ngrx/store";
import {logout} from "@app/auth/store/auth.actions";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-header-block',
  standalone: true,
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.scss'],
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderBlockComponent {

  isAuth$ = this.store.select(isAuth)
  constructor(private store: Store) {
  }

  onLogout() {
    this.store.dispatch(logout())
  }
}
