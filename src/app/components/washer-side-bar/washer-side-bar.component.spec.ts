import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherSideBarComponent } from './washer-side-bar.component';

describe('WasherSideBarComponent', () => {
  let component: WasherSideBarComponent;
  let fixture: ComponentFixture<WasherSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasherSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
