import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginPageComponent} from "@routing/login/login-page/login-page.component";
import {LoginBlockModule} from "@view/features/login-block/login-block.module";



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: LoginPageComponent
      }
    ]),
    LoginBlockModule,
  ]
})
export class LoginModule { }
