import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup<LoginForm>({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
        this.authService.signIn(this.form.value).subscribe((resp) => {
          
          
          console.log(resp)
    }, error => {
      console.log(error);
    })
  }
}
