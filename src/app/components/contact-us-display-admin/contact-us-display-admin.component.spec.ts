import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsDisplayAdminComponent } from './contact-us-display-admin.component';

describe('ContactUsDisplayAdminComponent', () => {
  let component: ContactUsDisplayAdminComponent;
  let fixture: ComponentFixture<ContactUsDisplayAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsDisplayAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsDisplayAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
