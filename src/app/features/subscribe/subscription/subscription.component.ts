import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../../core/services/subscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscriptionn',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionnComponent implements OnInit {
  subscription: any;
  loading = true;

  constructor(
    private subscriptionService: SubscriptionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptionService.getActiveSubscription().subscribe({
      next: (subscription) => {
        this.subscription = subscription;
        this.loading = false;
      },
      error: () => {
        this.router.navigateByUrl('subscription/premium');
      },
    });
  }
}
