import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
    ActivatedRoute,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
} from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-register-step-buttons-bar',
    standalone: true,
    imports: [
        ButtonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        ToastModule,
    ],
    templateUrl: './register-step-buttons-bar.component.html',
    styleUrl: './register-step-buttons-bar.component.scss',
})
export class RegisterStepButtonsBarComponent {
    @Input() currentStep: number = 1;
    @Input() nextDisabled: boolean = true;
    @Output() onNextStep = new EventEmitter<void>();
    @Output() onPreviousStep = new EventEmitter<void>();
    nextLink = this.currentStep + 1;
    previousLink = this.currentStep - 1;

    constructor(
        private readonly registerService: RegisterService,
        private router: Router,
        private messageService: MessageService
    ) {}

    ngOnChanges(): void {
        this.nextLink = this.currentStep + 1;
        this.previousLink = this.currentStep - 1;
    }

    ngOnInit() {
        console.log('button-step:', this.currentStep);
    }

    toastMessage() {
        this.messageService.add({severity:'warn', summary:'Formulário Inválido', detail:'Preencha todas as informações corretamente.'});
    }

    nextStep(event: Event) {
        event.preventDefault();
        this.onNextStep.emit();
        this.currentStep = this.registerService.currentStep;
        this.router.navigate(['/step-' + this.nextLink]);
    }

    previousStep(event: Event) {
        event.preventDefault();
        this.onPreviousStep.emit();
        this.currentStep = this.registerService.currentStep;
        this.router.navigate(['/step-' + this.previousLink]);
    }
}
