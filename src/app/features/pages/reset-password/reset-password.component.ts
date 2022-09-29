import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  form = new FormGroup({
    password: new FormControl('', { nonNullable: true }),
    passwordConfirmation: new FormControl('', { nonNullable: true }),
  });

  constructor() {}

  ngOnInit(): void {}

  resetPassword() {}
}
