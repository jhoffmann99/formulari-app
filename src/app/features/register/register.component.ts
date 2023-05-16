import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface RegisterForm {
  email: FormControl<string>;
  password: FormControl<string>;
  firstname: FormControl<string>;
  lastname: FormControl<string>;
  dateOfBirth: FormControl<Date>;
  gender: FormControl<'male' | 'female' | 'diverse'>;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup<RegisterForm>({
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
    firstname: new FormControl('', { nonNullable: false }),
    lastname: new FormControl('', { nonNullable: true }),
    dateOfBirth: new FormControl(null, { nonNullable: true }),
    gender: new FormControl(null, { nonNullable: true }),
  });

  constructor() {}

  ngOnInit(): void {}

  register() {}
}
