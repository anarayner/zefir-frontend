import { Component } from '@angular/core';

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.css']
})
export class LoginBlockComponent {

  onLogin(value: any) {
    console.log('OnLogin', value)
  }

}
