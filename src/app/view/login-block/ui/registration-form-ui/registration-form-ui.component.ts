import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthErrorStateMatcher} from "../helpers/formErrors";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-form-ui',
  templateUrl: './registration-form-ui.component.html',
  styleUrls: ['../form-ui.component.css']
})
export class RegistrationFormUiComponent implements OnInit {
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
