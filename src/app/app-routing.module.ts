import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoreModule} from "@ngrx/store";
import {DEFAULT_ROUTER_FEATURENAME, routerReducer} from "@ngrx/router-store";
import {AuthGuard} from "./core/guards/auth.guard";
import {GuestGuard} from "./core/guards/guest.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./routing/home/home.module').then(
        (m) => m.HomeModule
      )
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./routing/login/login.module').then(
        (m) => m.LoginModule
      ),
    canActivate: [GuestGuard]
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./routing/register/register.module').then(
        (m) => m.RegisterModule
      ),
    canActivate: [GuestGuard]
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./routing/cart/cart.module').then(
        (m) => m.CartModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./routing/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    loadChildren: () =>
      import('./routing/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      )
  }
];

@NgModule({
  imports: [
    StoreModule.forFeature(DEFAULT_ROUTER_FEATURENAME, routerReducer),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
