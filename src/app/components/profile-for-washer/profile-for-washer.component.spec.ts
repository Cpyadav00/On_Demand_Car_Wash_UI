import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileForWasherComponent } from './profile-for-washer.component';

describe('ProfileForWasherComponent', () => {
  let component: ProfileForWasherComponent;
  let fixture: ComponentFixture<ProfileForWasherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileForWasherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileForWasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
