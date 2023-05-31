import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  loggedIn$: Observable<boolean>;

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    this.loggedIn$ = this.authService.isAuthenticated$;
  }

  logout() {
    this.authService.signOut().subscribe(
      (resp) => {
        this.authService.setAuthenticated(false);
        this.router.navigateByUrl('home');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigateToStart() {
    if (this.authService.isAuthenticated) {
      this.router.navigateByUrl('dashboard');
    } else {
      this.router.navigateByUrl('home');
    }
  }
}
