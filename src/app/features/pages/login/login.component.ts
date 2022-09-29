import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface LoginForm {
  identifier: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup<LoginForm>({
    identifier: new FormControl(),
    password: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}

  login() {}
}
