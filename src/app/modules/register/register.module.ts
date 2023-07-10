import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {
  RegistrationBlockComponent
} from "@app/modules/register/components/registration-block/registration-block.component";
import {RegistrationPageComponent} from "@app/modules/register/registration-page/registration-page.component";



@NgModule({
  declarations: [
    RegistrationPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: RegistrationPageComponent
      }
    ]),
    RegistrationBlockComponent,
  ]
})
export class RegisterModule { }
