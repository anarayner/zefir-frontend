import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {
  RegistrationBlockComponent
} from "@view/features/registration-block/blocks/registration-block/registration-block.component";
import {RegistrationFormComponent} from "@view/components/forms/registration-form-ui/registration-form-ui.component";


@NgModule({
  declarations: [
    RegistrationBlockComponent
  ],
  exports: [
    RegistrationBlockComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RegistrationFormComponent
  ]
})
export class RegistrationBlockModule { }
