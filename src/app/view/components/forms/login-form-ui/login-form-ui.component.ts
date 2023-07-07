import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthErrorStateMatcher} from "@core/helpers/formErrors";
import {RouterLink} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@Component({
  selector: 'app-login-form-ui',
  templateUrl: './login-form-ui.component.html',
  styleUrls: ['../../../../styles/custom/form-ui.component.css'],
  imports: [
    CommonModule,
    RouterLink,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule
  ],
  standalone: true
})
export class LoginFormUiComponent implements OnInit{

  formGroup!: FormGroup;
  // @ts-ignore
  @Input() formError: string;
  @Input() disabled: boolean = false;
  @Output() login = new EventEmitter()

  emailFormControl = new FormControl('',
    [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('',
    [Validators.required, Validators.minLength(6)]);

  matcher = new AuthErrorStateMatcher();

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: this.emailFormControl,
      password: this.passwordFormControl
    })
  }

  onSubmit(){
    // console.log(this.formGroup.value)
    this.login.emit(this.formGroup.value)
  }

  onFormChange() {
    this.formError = '';
  }

}
