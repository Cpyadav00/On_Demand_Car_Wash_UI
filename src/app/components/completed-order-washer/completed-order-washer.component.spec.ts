import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedOrderWasherComponent } from './completed-order-washer.component';

describe('CompletedOrderWasherComponent', () => {
  let component: CompletedOrderWasherComponent;
  let fixture: ComponentFixture<CompletedOrderWasherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedOrderWasherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedOrderWasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
