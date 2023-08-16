import {FormControl} from '@angular/forms';
import {IsStringValidatorDirective} from './is-string-validator.directive';

describe('IsStringValidatorDirective', () => {
    let directive!: IsStringValidatorDirective;

    beforeEach(() => {
        directive = new IsStringValidatorDirective();
    });

    it('Форма с числом', () => {
        const error = directive.validate(new FormControl('20000'));

        expect(error).toEqual({isString: 'Is not string'});
    });

    it('Форма без числа', () => {
        const error = directive.validate(new FormControl('String 1'));

        // expect(error).toEqual(null);
        expect(error).toBeNull();
    });
});
