import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStepHeaderComponent } from './register-step-header.component';

describe('RegisterStepHeaderComponent', () => {
  let component: RegisterStepHeaderComponent;
  let fixture: ComponentFixture<RegisterStepHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterStepHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterStepHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
