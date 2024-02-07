import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {
    FormArray,
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { squads } from '../../interfaces/squads-info';
import { RegisterService } from '../../services/register.service';
import { RegisterStepButtonsBarComponent } from '../register-step-buttons-bar/register-step-buttons-bar.component';
import { RegisterStepHeaderComponent } from '../register-step-header/register-step-header.component';
import { RegisterStepTwoComponent } from '../register-step-two/register-step-two.component';
import { confirmPasswordValidator } from './validators/confirm-password.validator';

@Component({
    selector: 'app-register-step-one',
    standalone: true,
    imports: [
        RegisterStepHeaderComponent,
        InputTextModule,
        ReactiveFormsModule,
        MessagesModule,
        RegisterStepButtonsBarComponent,
        RegisterStepTwoComponent,
        RadioButtonModule,
        FormsModule,
        MultiSelectModule,
        CheckboxModule,
        PasswordModule,
    ],
    templateUrl: './register-step-one.component.html',
    styleUrl: './register-step-one.component.scss',
})
export class RegisterStepOneComponent implements AfterViewInit {
    stepForm!: FormGroup;
    currentStep = 1;
    selectedRole: string | null = null;

    userRoleOptions = [
        {
            option: 'Desenvolvedor',
            value: 'developer',
        },
        {
            option: 'Gerencial',
            value: 'manager',
        },
    ];

    squadsInfo = squads;

    selectedSquads!: any;
    selectedSquadsStringArray!: string[];

    constructor(
        private readonly registerService: RegisterService,
        private fb: FormBuilder,
        private cdRef: ChangeDetectorRef
    ) {
        this.stepForm = this.fb.group(
            {
                username: this.fb.control('', [Validators.required]),
                role: this.fb.control('', [Validators.required]),
                squads: this.fb.array([],),
                password1: this.fb.control('', [Validators.required]),
                password2: this.fb.control('', [Validators.required]),
            },
            { validators: confirmPasswordValidator }
        );
    }

    get username() {
        return this.stepForm.get('username');
    }

    get role() {
        return this.stepForm.get('role');
    }

    get squads() {
        return this.stepForm.get('squads');
    }

    get password1() {
        return this.stepForm.get('password1');
    }

    get password2() {
        return this.stepForm.get('password2');
    }

    ngOnInit() {
        this.currentStep = 1;
    }

    ngAfterViewInit(): void {
        this.selectedSquads = squads.filter((squad) =>
            this.registerService
                .getUserRegisterData()
                .squads.includes(String(squad.id))
        );
        this.squadsInfo = this.squadsInfo.map(
            (s: { id: number; name: string }) => {
                return {
                    ...s,
                    isSelected: this.selectedSquads.some(
                        (selectedSquad: { id: number; name: string }) =>
                            selectedSquad.id === s.id
                    ),
                };
            }
        );
        this.registerService.saveUserRegisterData({
            ...this.registerService.getUserRegisterData(),
            squads: [],
        });
        this.stepForm.setValue(this.registerService.getUserRegisterData());
        this.selectedSquadsStringArray = this.selectedSquads.map(
            (s: { id: number; name: string }) => {
                return String(s.id);
            }
        );
        this.registerService.saveSquads(this.selectedSquadsStringArray);
        this.selectedRole = this.registerService.getUserRegisterData().role
            ? this.registerService.getUserRegisterData().role
            : this.userRoleOptions[0].value;
        this.registerService.stepOneValid = this.stepForm.valid;
        this.cdRef.detectChanges();
    }

    ngOnChanges(): void {
        this.registerService.saveUserRegisterData(this.stepForm.value);
        this.registerService.stepOneValid = this.stepForm.valid;
    }

    onCheckboxChange(event: Event): void {
        const squadsArray: FormArray = this.stepForm.get('squads') as FormArray;
        const target = event.target as HTMLInputElement;

        if (target.checked) {
            squadsArray.push(this.fb.control(target.value));
            this.selectedSquadsStringArray.forEach((s) => {
                squadsArray.push(this.fb.control(s))
            });
        } else {
            const index = squadsArray.controls.findIndex(
                (x) => x.value === target.value
            );
            squadsArray.removeAt(index);
        }
    }

    onBlur() {
        this.registerService.saveUserRegisterData(this.stepForm.value);
        this.selectedRole = String(this.stepForm.value.role);
        this.registerService.stepOneValid = this.stepForm.valid;
    }
}
