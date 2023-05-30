import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../core/services/notification.service';

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

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.signIn(this.form.value).subscribe(
      (resp) => {
        this.authService.setAuthenticated(true);
        this.router.navigateByUrl('dashboard');
      },
      (error) => {
        this.notificationService.error(
          'Die Anmeldung konnte nicht ausgeführt werden'
        );
      }
    );
  }
}
