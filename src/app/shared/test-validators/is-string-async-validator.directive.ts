import {ChangeDetectorRef, Directive} from '@angular/core';
import {
    AbstractControl,
    AsyncValidator,
    NG_ASYNC_VALIDATORS,
    ValidationErrors,
} from '@angular/forms';
import {Observable, map, tap, timer} from 'rxjs';
import {isStringValidator} from './is-string.validator';

@Directive({
    selector: '[appIsStringAsyncValidator]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            multi: true,
            // eslint-disable-next-line no-use-before-define
            useExisting: IsStringAsyncValidatorDirective,
        },
    ],
})
export class IsStringAsyncValidatorDirective implements AsyncValidator {
    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

    validate(
        control: AbstractControl<any, any>,
    ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        // eslint-disable-next-line no-console
        console.log('Run IsStringAsyncValidatorDirective');

        return timer(3000).pipe(
            map(() => isStringValidator(control)),
            tap(() => {
                this.changeDetectorRef.markForCheck();
            }),
        );
    }
}
