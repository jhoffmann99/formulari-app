import { Component } from '@angular/core';
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
export class LoginComponent {
  form: FormGroup = new FormGroup<LoginForm>({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}


  login() {
    this.authService.signIn(this.form.value).subscribe(
      () => {
        this.notificationService.success("Du bist nun angemeldet");
        this.router.navigateByUrl('dashboard');
      },
      () => {
        this.notificationService.error(
          'Die Anmeldung konnte nicht ausgeführt werden'
        );
      }
    );
  }
}
