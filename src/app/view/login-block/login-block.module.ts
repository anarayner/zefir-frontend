import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormUiComponent } from './ui/login-form-ui/login-form-ui.component';
import { LoginBlockComponent } from './blocks/login-block/login-block.component';



@NgModule({
  declarations: [
    LoginFormUiComponent,
    LoginBlockComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginBlockComponent
  ]
})
export class LoginBlockModule { }
