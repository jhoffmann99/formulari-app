import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterSubscriptionComponent } from './starter-subscription.component';

describe('StarterSubscriptionComponent', () => {
  let component: StarterSubscriptionComponent;
  let fixture: ComponentFixture<StarterSubscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarterSubscriptionComponent]
    });
    fixture = TestBed.createComponent(StarterSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
