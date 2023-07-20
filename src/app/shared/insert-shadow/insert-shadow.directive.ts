import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appInsertShadow]',
})
export class InsertShadowDirective {
    private isShadowActive = false;

    // @HostListener('touchstart', ['$event.clientY', '$event.clientX'])
    @HostListener('click', ['$event.clientY', '$event.clientX'])
    onClick(y: number, x: number) {
        // eslint-disable-next-line no-console
        console.log('Toggle shadow', x, y);

        // this.boxShadow = this.boxShadow ? '' : 'inset 0 0 10px #000';
        this.isShadowActive = !this.isShadowActive;
    }

    // @HostBinding('style.boxShadow')
    // boxShadow = '';
    // boxShadow = 'inset 0 0 10px #000';
    @HostBinding('style.boxShadow')
    get boxShadow() {
        return this.isShadowActive ? 'inset 0 0 10px #000' : '';
    }

    // constructor(private readonly element: ElementRef) {
    //     console.log(element);
    // }
}
