import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {LoginBlockComponent} from "@view/features/login-block/blocks/login-block/login-block.component";
import {LoginFormUiComponent} from "@view/components/forms/login-form-ui/login-form-ui.component";


@NgModule({
  declarations: [
    LoginBlockComponent
  ],
  exports: [
    LoginBlockComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    LoginFormUiComponent
  ]
})
export class LoginBlockModule { }
