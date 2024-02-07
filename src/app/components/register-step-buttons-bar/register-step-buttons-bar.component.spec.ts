import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStepButtonsBarComponent } from './register-step-buttons-bar.component';

describe('RegisterStepButtonsBarComponent', () => {
  let component: RegisterStepButtonsBarComponent;
  let fixture: ComponentFixture<RegisterStepButtonsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterStepButtonsBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterStepButtonsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
