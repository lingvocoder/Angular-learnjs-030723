import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';
import {currency} from '../../../shared/currency/currency';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input() product: IProduct | undefined;

    @Output() buy = new EventEmitter<IProduct['_id']>();

    // constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    // setInterval(() => {
    //     this.changeDetectorRef.detectChanges();
    // }, 1000);
    // }

    onProductBuy(event: Event) {
        event.stopPropagation();

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.buy.emit(this.product!._id);
    }

    isStarActive(starIndex: number): boolean {
        return !!this.product && this.product.rating >= starIndex;
    }

    getPrice(price: number | undefined): string {
        // eslint-disable-next-line no-console
        console.log('getPrice apply');

        return currency(price, 'USD');
    }
}
