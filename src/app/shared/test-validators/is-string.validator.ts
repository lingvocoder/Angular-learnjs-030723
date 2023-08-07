// import { ValidatorFn } from "@angular/forms";

import {AbstractControl, ValidationErrors} from '@angular/forms';

// const isStringValidator: ValidatorFn;

export function isStringValidator(control: AbstractControl): ValidationErrors | null {
    return Number(control.value) ? {isString: 'Is not string'} : null;
}
