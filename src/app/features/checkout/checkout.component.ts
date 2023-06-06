import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IPayPalConfig,
  ICreateSubscriptionRequest,
} from 'ngx-paypal';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  @Input()
  subscriptionId = '';

  @Output()
  success = new EventEmitter<any>();
    
  @Output()
  cancel = new EventEmitter<string>();
    
  @Output()
  error = new EventEmitter<string>();

  public payPalConfig?: IPayPalConfig;


  ngOnInit(): void {
    this.initConfig();
  }

  private initConfig(): void {
      this.payPalConfig = {
      currency: 'EUR',
      clientId:
        'AcqM2QgzJJ2UNs1oecEgiQ-kwIoEui3CfN6U07kdyOM8DowLkIJcdHBrMC7nryPo8am15yLQZnaFkNMT',
      intent: 'subscription',
      createSubscriptionOnClient: () =>
        <ICreateSubscriptionRequest>{
          plan_id: this.subscriptionId,
        },
      vault: 'true',
      style: {
        label: 'subscribe',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.subscription.get().then((details) => {
          this.success.emit(details);
        });
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
          this.cancel.emit('Der Bezahlvorgang wurde abgebrochen.');
      },
      onError: (err) => {
        console.log('OnError', err);
          this.error.emit('Die Zahlungsabwicklung schlug fehl.');
      }
    };
  }


}
