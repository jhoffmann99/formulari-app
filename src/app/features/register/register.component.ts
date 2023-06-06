import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../core/services/notification.service';

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
export class RegisterComponent {
  form: FormGroup = new FormGroup<RegisterForm>({
    firstName: new FormControl('', { nonNullable: true }),
    lastName: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
    dateOfBirth: new FormControl(null, { nonNullable: true }),
    gender: new FormControl(null, { nonNullable: true }),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  register() {
    this.authService.signUp(this.form.value).subscribe({
      next: () => {
        this.notificationService.success(
          'Du wurdest erfolgreich registiert und kannst dich nun anmelden'
        );
        this.router.navigateByUrl('home');
      },
      error: () => this.router.navigateByUrl('home'),
    });
  }
}
