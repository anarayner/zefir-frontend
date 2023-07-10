import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginPageComponent} from "@app/modules/login/login-page/login-page.component";
import {LoginBlockComponent} from "@app/modules/login/components/login-block/login-block.component";




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
    LoginBlockComponent,
  ]
})
export class LoginModule { }
