import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
