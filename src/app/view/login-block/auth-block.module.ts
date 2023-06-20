import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormUiComponent } from './ui/login-form-ui/login-form-ui.component';
import { LoginBlockComponent } from './blocks/login-block/login-block.component';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import { RegistrationBlockComponent } from './blocks/registration-block/registration-block.component';
import { RegistrationFormUiComponent } from './ui/registration-form-ui/registration-form-ui.component';
import {AuthStoreModule} from "../../store/auth-store/auth-store.module";


@NgModule({
  declarations: [
    LoginFormUiComponent,
    LoginBlockComponent,
    RegistrationBlockComponent,
    RegistrationFormUiComponent
  ],
  imports: [
    CommonModule,
    AuthStoreModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
    FormsModule
  ],
  exports: [
    LoginBlockComponent,
    RegistrationBlockComponent
  ]
})
export class AuthBlockModule { }
