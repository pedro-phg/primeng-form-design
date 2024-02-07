import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-register-step-header',
    standalone: true,
    imports: [],
    templateUrl: './register-step-header.component.html',
    styleUrl: './register-step-header.component.scss',
})
export class RegisterStepHeaderComponent {
    @Input() stepTitle: string = '';
    @Input() description: string = '';
}
