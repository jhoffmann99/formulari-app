import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IPayPalConfig,
  ICreateOrderRequest,
  ICreateSubscriptionRequest,
} from 'ngx-paypal';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  @Input()
  subscriptionId: string = '';

  @Output()
  onSuccess = new EventEmitter<string>();
    
  @Output()
  onCancel = new EventEmitter<string>();
    
  @Output()
  onError = new EventEmitter<string>();

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
      createSubscriptionOnClient: (data) =>
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
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
          this.onCancel.emit('Der Bezahlvorgang wurde abgebrochen.');
      },
      onError: (err) => {
        console.log('OnError', err);
          this.onError.emit('Die Zahlungsabwicklung schlug fehl.');
      },
      onClick: (data, actions) => {
        
        this.resetStatus();
      },
    };
  }

  resetStatus() {}
}
