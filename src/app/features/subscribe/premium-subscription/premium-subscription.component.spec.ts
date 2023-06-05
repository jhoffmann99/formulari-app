import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumSubscriptionComponent } from './premium-subscription.component';

describe('StarterSubscriptionComponent', () => {
  let component: PremiumSubscriptionComponent;
  let fixture: ComponentFixture<PremiumSubscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumSubscriptionComponent],
    });
    fixture = TestBed.createComponent(PremiumSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
