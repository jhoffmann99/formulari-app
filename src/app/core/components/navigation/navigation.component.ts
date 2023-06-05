import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  loggedIn$: Observable<boolean>;
  activeTab;

  constructor(
    private router: Router,
    public authService: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loggedIn$ = this.authService.isAuthenticated$;
  }

  logout() {
    this.authService.signOut().subscribe(
      (resp) => {
        this.authService.setAuthenticated(false);
        this.notificationService.success('Du wurdest erfolgreich abgemeldet');
        this.router.navigateByUrl('home');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigateToStart() {
    if (this.authService.isAuthenticated) {
      this.activeTab = 'dashboard'
      this.router.navigateByUrl('dashboard');
    } else {
      this.activeTab = 'home'
      this.router.navigateByUrl('home');
    }
  }

  navigate(path) {
    this.activeTab = path;
    this.router.navigateByUrl(path);
  }

}
