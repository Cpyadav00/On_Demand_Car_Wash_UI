import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestPasswordFormComponent } from './rest-password-form.component';

describe('RestPasswordFormComponent', () => {
  let component: RestPasswordFormComponent;
  let fixture: ComponentFixture<RestPasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestPasswordFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
