import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { RegisterStepOneComponent } from './components/register-step-one/register-step-one.component';
import { RegisterStepTwoComponent } from './components/register-step-two/register-step-two.component';
import { RegisterStepThreeComponent } from './components/register-step-three/register-step-three.component';
import { RegisterStepFiveComponent } from './components/register-step-five/register-step-five.component';
import { RegisterStepFourComponent } from './components/register-step-four/register-step-four.component';

export const routes: Routes = [
    {
        path: '',
        component: RegisterComponent,
        title: 'Arcane | Registro',
        children: [
            {
                path: 'step-1',
                component: RegisterStepOneComponent
            },
            {
                path: 'step-2',
                component: RegisterStepTwoComponent
            },
            {
                path: 'step-3',
                component: RegisterStepThreeComponent
            },
            {
                path: 'step-4',
                component: RegisterStepFourComponent
            },
            {
                path: 'step-5',
                component: RegisterStepFiveComponent
            },
        ]
    }
];
