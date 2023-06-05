import { Component } from '@angular/core';
import { SubscriptionService } from '../../../core/services/subscription.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-premium-subscription',
  templateUrl: './premium-subscription.component.html',
  styleUrls: ['./premium-subscription.component.scss'],
})
export class PremiumSubscriptionComponent {
  subscriptionId = 'P-9KP52680EC194034YMR44SZI';

  constructor(
    private subscriptionService: SubscriptionService,
    private notificationService: NotificationService
  ) {}

  updateUserSubscription(data) {
    this.subscriptionService.addSubscription(data).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => console.log(error),
    });
  }

  showError(error: string) {
    this.notificationService.error('Es ist ein Fehler aufgetreten');
  }

  showCancel(error: string) {
    this.notificationService.success('Der Vorgang wurde abgebrochen');
  }
}
