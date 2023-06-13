import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {AuthBlockModule} from "../../view/login-block/auth-block.module";
import {RouterModule, Routes} from "@angular/router";
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';


const routes: Routes = [{
  path: '',
  children: [
    {path: 'login', component: LoginPageComponent},
    {path: 'registration', component: RegistrationPageComponent}
  ]
}]

@NgModule({
  declarations: [
    LoginPageComponent,
    RegistrationPageComponent,
  ],
  imports: [
    CommonModule,
    AuthBlockModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
