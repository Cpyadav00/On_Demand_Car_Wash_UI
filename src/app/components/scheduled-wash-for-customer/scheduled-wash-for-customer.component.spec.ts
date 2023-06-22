import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledWashForCustomerComponent } from './scheduled-wash-for-customer.component';

describe('ScheduledWashForCustomerComponent', () => {
  let component: ScheduledWashForCustomerComponent;
  let fixture: ComponentFixture<ScheduledWashForCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledWashForCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledWashForCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
