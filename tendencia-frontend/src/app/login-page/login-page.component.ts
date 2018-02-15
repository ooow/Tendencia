import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email;
  password;

  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    console.log(`${this.email} : ${this.password}`);
  }

  singUp() {
    console.log(`${this.email} : ${this.password}`);
  }

}
