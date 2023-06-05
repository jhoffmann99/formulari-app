import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionnComponent } from './subscription.component';

describe('SubscriptionnComponent', () => {
  let component: SubscriptionnComponent;
  let fixture: ComponentFixture<SubscriptionnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionnComponent],
    });
    fixture = TestBed.createComponent(SubscriptionnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
