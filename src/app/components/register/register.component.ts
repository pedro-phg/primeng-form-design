import { Component, OnChanges, OnInit } from '@angular/core';
import { StepBarComponent } from '../register-step-bar/step-bar.component';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { RegisterStepOneComponent } from '../register-step-one/register-step-one.component';
import { RegisterStepButtonsBarComponent } from '../register-step-buttons-bar/register-step-buttons-bar.component';
import { RegisterService } from '../../services/register.service';


@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        StepBarComponent,
        RouterOutlet,
        StepBarComponent,
        CardModule,
        RegisterStepOneComponent,
        RegisterStepButtonsBarComponent,
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnChanges {
    currentStep = 1;

    constructor(private readonly registerService: RegisterService) {}

    ngOnChanges(): void {
        this.currentStep = this.registerService.currentStep;
    }

    nextStep() {
        if (this.currentStep == 5) {
            return;
        }

        if (this.currentStep == 1) {
            if (this.registerService.stepOneValid) {
                this.currentStep = 2;
                this.registerService.currentStep = this.currentStep;
                return;
            }
        }

        if (this.currentStep == 2) {
            if (this.registerService.stepTwoValid) {
                this.currentStep = 3;
                this.registerService.currentStep = this.currentStep;
                return;
            }
        }

        if (this.currentStep == 3) {
            if (this.registerService.stepThreeValid) {
                this.currentStep = 4;
                this.registerService.currentStep = this.currentStep;
                return;
            }
        }

        if (this.currentStep == 4) {
            this.currentStep = 5;
            this.registerService.currentStep = this.currentStep;
            return;
        }
    }

    previousStep() {
        if (this.currentStep == 1) {
            return;
        }
        this.currentStep--;
        this.registerService.currentStep = this.currentStep;
    }
}
