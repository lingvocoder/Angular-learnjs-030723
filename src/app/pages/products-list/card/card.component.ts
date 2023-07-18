import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
// implements
//     OnChanges,
//     OnInit,
//     DoCheck,
//     AfterContentInit,
//     AfterContentChecked,
//     AfterViewInit,
//     AfterViewChecked,
//     OnDestroy
export class CardComponent {
    @Input() product: IProduct | undefined;

    @Output() buy = new EventEmitter<IProduct['_id']>();

    onProductBuy(event: Event) {
        event.stopPropagation();

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.buy.emit(this.product!._id);
    }

    isStarActive(starIndex: number): boolean {
        return !!this.product && this.product.rating >= starIndex;
    }

    // constructor() {
    //     // eslint-disable-next-line no-console
    //     console.log('CardComponent: constructor', this.product);
    // }

    // ngOnChanges({product}: SimpleChanges): void {
    //     if (product) {
    //         // eslint-disable-next-line no-console
    //         console.log('Show notification by product change');
    //     }
    // }

    // ngOnInit(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('CardComponent: OnInit', this.product);
    // }

    // ngDoCheck(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('CardComponent: DoCheck');
    // }

    // ngAfterContentInit(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('CardComponent: AfterContentInit');
    // }

    // ngAfterContentChecked(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('CardComponent: ngAfterContentChecked');
    // }

    // ngAfterViewInit(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('CardComponent: AfterViewInit');
    // }

    // ngAfterViewChecked(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('CardComponent: AfterViewChecked');
    // }

    // ngOnDestroy(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('CardComponent: ngOnDestroy');
    // }
}
