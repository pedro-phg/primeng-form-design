import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileConfirmationBarComponent } from './profile-confirmation-bar.component';

describe('ProfileConfirmationBarComponent', () => {
  let component: ProfileConfirmationBarComponent;
  let fixture: ComponentFixture<ProfileConfirmationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileConfirmationBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileConfirmationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
