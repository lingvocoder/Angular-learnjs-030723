import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-counter-input',
    templateUrl: './counter-input.component.html',
    styleUrls: ['./counter-input.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            // eslint-disable-next-line no-use-before-define
            useExisting: CounterInputComponent,
        },
    ],
})
export class CounterInputComponent implements ControlValueAccessor {
    @Input() step = 1;

    counter = 0;
    isDisabled = false;

    private onChange: (value: number) => void = () => {
        console.error('onChange not registred in CounterInputComponent');
    };

    private onTouch: () => void = () => {
        console.error('onTouch not registred in CounterInputComponent');
    };

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

    back() {
        this.counter -= this.step;

        this.onChange(this.counter);
        this.onTouch();
    }

    next() {
        this.counter += this.step;

        this.onChange(this.counter);
        this.onTouch();
    }

    // formControlDirective.formControl.valueChanges.subscribe(value => {
    //      this.NG_VALUE_ACCESSOR.writeValue(value);
    // })
    writeValue(value: number) {
        // eslint-disable-next-line no-console
        // console.log('writeValue', value);
        this.counter = value;

        this.changeDetectorRef.markForCheck();
    }

    // cb === (value: number) => {this.formControl.setValue(value)}
    registerOnChange(cb: (value: number) => void) {
        this.onChange = cb;
    }

    registerOnTouched(cb: () => void) {
        this.onTouch = cb;
    }

    setDisabledState(isDisabled: boolean) {
        this.isDisabled = isDisabled;
    }
}
