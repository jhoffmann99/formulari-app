import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading = false;

  loggedIn$: Observable<boolean>;

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    this.loggedIn$ = this.authService.isAuthenticated$;
  }

}
