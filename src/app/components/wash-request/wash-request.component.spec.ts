import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashRequestComponent } from './wash-request.component';

describe('WashRequestComponent', () => {
  let component: WashRequestComponent;
  let fixture: ComponentFixture<WashRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WashRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
