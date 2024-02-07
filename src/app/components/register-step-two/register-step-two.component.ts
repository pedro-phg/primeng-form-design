import { Component, OnInit } from '@angular/core';
import { RegisterStepHeaderComponent } from '../register-step-header/register-step-header.component';
import { RegisterService } from '../../services/register.service';
import { RegisterStepButtonsBarComponent } from '../register-step-buttons-bar/register-step-buttons-bar.component';
import { ProfileConfirmationBarComponent } from '../profile-confirmation-bar/profile-confirmation-bar.component';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-register-step-two',
    standalone: true,
    imports: [RegisterStepHeaderComponent, RegisterStepButtonsBarComponent, ProfileConfirmationBarComponent, TableModule],
    templateUrl: './register-step-two.component.html',
    styleUrl: './register-step-two.component.scss',
})
export class RegisterStepTwoComponent implements OnInit {
    currentStep = 2;
    pictureUrl: string = 'https://github.com/pedro-phg.png';
    profileName: string = 'Pedro Henrique Gonçalves Adalberto';
    profileMail: string = 'pedro.hadalberto@gmail.com (a0153814)';
    profileKey: string = 'a0153814';
    profilePreference: string = 'Scrum Master';

    constructor(private readonly registerService: RegisterService) {}

    ngOnInit(): void {
        this.currentStep = 2;
    }
}
