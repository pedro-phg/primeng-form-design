import { FormArray, FormControl } from "@angular/forms";

export interface IUserRegisterData {
    username: string;
    role: string;
    squads: string[];
    password1:string;
    password2:string;
}
