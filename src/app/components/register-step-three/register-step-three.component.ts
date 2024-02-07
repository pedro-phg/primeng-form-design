import { Component } from '@angular/core';
import { RegisterStepHeaderComponent } from '../register-step-header/register-step-header.component';
import { RegisterService } from '../../services/register.service';
import { RegisterStepButtonsBarComponent } from '../register-step-buttons-bar/register-step-buttons-bar.component';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-register-step-three',
    standalone: true,
    imports: [RegisterStepHeaderComponent, RegisterStepButtonsBarComponent, ButtonModule],
    templateUrl: './register-step-three.component.html',
    styleUrl: './register-step-three.component.scss',
})
export class RegisterStepThreeComponent {
    currentStep = 3;

    constructor(private readonly registerService: RegisterService) {}

    ngOnInit(): void {
        this.currentStep = 3;
    }
}
