import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterWashOrderDetailsComponent } from './after-wash-order-details.component';

describe('AfterWashOrderDetailsComponent', () => {
  let component: AfterWashOrderDetailsComponent;
  let fixture: ComponentFixture<AfterWashOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterWashOrderDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterWashOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
