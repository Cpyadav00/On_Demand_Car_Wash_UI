import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedOrderCustomerComponent } from './completed-order-customer.component';

describe('CompletedOrderCustomerComponent', () => {
  let component: CompletedOrderCustomerComponent;
  let fixture: ComponentFixture<CompletedOrderCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedOrderCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedOrderCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
