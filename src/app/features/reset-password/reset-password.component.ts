import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  form = new FormGroup({
    password: new FormControl('', { nonNullable: true }),
    passwordConfirmation: new FormControl('', { nonNullable: true }),
  });

}
