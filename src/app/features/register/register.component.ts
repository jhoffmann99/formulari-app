import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

interface RegisterForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
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
    firstName: new FormControl('', { nonNullable: true }),
    lastName: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
    dateOfBirth: new FormControl(null, { nonNullable: true }),
    gender: new FormControl(null, { nonNullable: true }),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    this.authService.signUp(this.form.value).subscribe(result => {
      this.router.navigateByUrl('home');
    }, error => {
      console.log(error);
    })
  }
}
