import { Component } from '@angular/core';
import {
  RegistrationFormComponent
} from "@app/modules/register/components/registration-form-ui/registration-form-ui.component";

@Component({
  selector: 'app-registration-block',
  templateUrl: './registration-block.component.html',
  styleUrls: ['./registration-block.component.scss'],
  imports: [
    RegistrationFormComponent
  ],
  standalone: true
})
export class RegistrationBlockComponent {

}
