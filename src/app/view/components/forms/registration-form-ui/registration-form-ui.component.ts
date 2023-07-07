import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthErrorStateMatcher} from "@core/helpers/formErrors";
import {RouterLink} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-registration-form-ui',
  templateUrl: './registration-form-ui.component.html',
  styleUrls: ['../../../../styles/custom/form-ui.component.css'],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule
  ],
  standalone: true
})
export class RegistrationFormComponent implements OnInit {
  formGroup!: FormGroup;

  emailFormControl = new FormControl('',
    [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('',
    [Validators.required, Validators.minLength(6)]);
  firstNameFormControl = new FormControl('',
    [Validators.required]);
  lastNameFormControl = new FormControl('',
    [Validators.required]);


  matcher = new AuthErrorStateMatcher();

  constructor() {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: this.emailFormControl,
      password: this.passwordFormControl
    })
  }
}
