import {Pipe, PipeTransform} from '@angular/core';
import {currency} from './currency';

@Pipe({
    name: 'currency',
    pure: false,
})
export class CurrencyPipe implements PipeTransform {
    transform(value: number | undefined, locale: string): string {
        // eslint-disable-next-line no-console
        console.log('Pipe transform');

        return currency(value, locale);
    }
}
