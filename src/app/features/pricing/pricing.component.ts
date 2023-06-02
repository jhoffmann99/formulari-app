import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {


  monthly = true;

  isAuthenticated$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isAuthenticated$ = authService.isAuthenticated$;
  }

  plans() {
    console.log('click');
    this.monthly = !this.monthly;
  }
}
