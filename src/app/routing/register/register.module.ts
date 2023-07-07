import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {RegistrationFormComponent} from "@view/components/forms/registration-form-ui/registration-form-ui.component";
import {RegistrationPageComponent} from "@routing/register/registration-page/registration-page.component";
import {RegistrationBlockModule} from "@view/features/registration-block/registration-block.module";



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
    RegistrationBlockModule,
  ]
})
export class RegisterModule { }
