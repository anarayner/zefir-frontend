import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {LoginBlockModule} from "../../view/login-block/login-block.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    LoginBlockModule,
    RouterModule.forChild([
      {
        path: 'login',
        pathMatch: 'full',
        component: LoginPageComponent
      }
    ])
  ]
})
export class AuthModule { }
