import { Component } from '@angular/core';
import { RegisterStepHeaderComponent } from '../register-step-header/register-step-header.component';
import { RegisterService } from '../../services/register.service';
import { RegisterStepButtonsBarComponent } from '../register-step-buttons-bar/register-step-buttons-bar.component';

@Component({
  selector: 'app-register-step-five',
  standalone: true,
  imports: [RegisterStepHeaderComponent, RegisterStepButtonsBarComponent],
  templateUrl: './register-step-five.component.html',
  styleUrl: './register-step-five.component.scss'
})
export class RegisterStepFiveComponent {
  currentStep = 5;
    
  constructor(private readonly registerService: RegisterService) {}

  ngOnInit(): void {
      this.registerService.currentStep = this.currentStep;
  }
}
