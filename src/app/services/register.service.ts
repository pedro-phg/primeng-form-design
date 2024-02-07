import { Injectable } from '@angular/core';
import { IUserRegisterData } from '../interfaces/register-info';
import { FormArray, FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class RegisterService {
    constructor() {}

    currentStep: number = 1;

    stepOneValid: boolean = false;
    stepTwoValid: boolean = false;
    stepThreeValid: boolean = false;
    stepFourValid: boolean = false;
    stepFiveValid: boolean = false;

    userRegisterData: IUserRegisterData = {
        username: '',
        role: '',
        squads: [],
        password1: '',
        password2: '',
    }

    saveUserRegisterData(data: IUserRegisterData) {
        this.userRegisterData = data;
    }

    saveSquads(squads: string[]) {
        this.userRegisterData = {
            ...this.userRegisterData,
            squads,
        }
    }

    getUserRegisterData(): IUserRegisterData{
        return this.userRegisterData;
    }
}
