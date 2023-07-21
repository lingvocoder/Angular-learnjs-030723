import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: IProduct | undefined = undefined;
    @Output() buyProductItem: EventEmitter<object> = new EventEmitter<object>();

    onProductBuy(event: Event) {
        event.stopPropagation();
        const item = {
            id: this.product?._id,
            price: this.product?.price,
        };

        this.buyProductItem.emit(item);
        // eslint-disable-next-line no-console
        console.log('Buy product');
    }

    isStarActive(starIndex: number): boolean {
        return this.product ? this.product.rating >= starIndex : false;
    }
}
