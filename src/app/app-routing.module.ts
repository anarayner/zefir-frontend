import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoreModule} from "@ngrx/store";
import {DEFAULT_ROUTER_FEATURENAME, routerReducer} from "@ngrx/router-store";

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./routing/home/home.module').then(
        (m) => m.HomeModule
      )
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./routing/auth/auth.module').then(
        (m) => m.AuthModule
      )
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
