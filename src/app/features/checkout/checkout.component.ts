import {
  Component,
  OnInit
} from '@angular/core';
import {
  IPayPalConfig,
  ICreateOrderRequest, 
  ICreateSubscriptionRequest
} from 'ngx-paypal';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  public payPalConfig?: IPayPalConfig;
  
  showSuccess;
  showError;
  showCancel;

  ngOnInit(): void {
      this.initConfig();
  }

  private initConfig(): void {
      this.payPalConfig = {
          currency: 'EUR',
          clientId: 'AcqM2QgzJJ2UNs1oecEgiQ-kwIoEui3CfN6U07kdyOM8DowLkIJcdHBrMC7nryPo8am15yLQZnaFkNMT',
          intent: 'subscription',
          createSubscriptionOnClient: (data) => <ICreateSubscriptionRequest>{
              plan_id: 'P-9KP52680EC194034YMR44SZI'
          },
          vault: 'true',
          style: {
              label: 'paypal',
              layout: 'vertical'
          },
          onApprove: (data, actions) => {
              console.log('onApprove - transaction was approved, but not authorized', data, actions);
              actions.subscription.get().then(details => {
                  console.log('onApprove - you can get full order details inside onApprove: ', details);
                  
              });

          },
          onCancel: (data, actions) => {
              console.log('OnCancel', data, actions);
              this.showCancel = true;

          },
          onError: err => {
              console.log('OnError', err);
              this.showError = true;
          },
          onClick: (data, actions) => {
              console.log('onClick', data, actions);
              this.resetStatus();
          }
      };
  }

  resetStatus(){}
}
