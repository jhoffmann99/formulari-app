import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', { nonNullable: true }),
  });

  constructor() {}

  ngOnInit(): void {}

  forgotPassword() {}
}
