import {Directive} from '@angular/core';
import {NG_VALIDATORS, Validator} from '@angular/forms';
import {isStringValidator} from './is-string.validator';

@Directive({
    selector: '[appIsStringValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            // eslint-disable-next-line no-use-before-define
            useExisting: IsStringValidatorDirective,
        },
    ],
})
export class IsStringValidatorDirective implements Validator {
    validate = isStringValidator;

    // validate(control: AbstractControl<any, any>): ValidationErrors | null {
    //      return Number(control.value) ? {isString: 'Is not string'} : null;
    // }
}
