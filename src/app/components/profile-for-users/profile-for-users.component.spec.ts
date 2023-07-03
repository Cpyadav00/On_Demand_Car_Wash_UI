import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileForUsersComponent } from './profile-for-users.component';

describe('ProfileForUsersComponent', () => {
  let component: ProfileForUsersComponent;
  let fixture: ComponentFixture<ProfileForUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileForUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileForUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
