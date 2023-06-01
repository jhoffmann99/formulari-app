import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {

  monthly = true;

  plans() {
    console.log('click');
    this.monthly = !this.monthly;
  }
}
