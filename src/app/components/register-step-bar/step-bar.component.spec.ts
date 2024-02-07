import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepBarComponent } from './step-bar.component';

describe('StepBarComponent', () => {
  let component: StepBarComponent;
  let fixture: ComponentFixture<StepBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
