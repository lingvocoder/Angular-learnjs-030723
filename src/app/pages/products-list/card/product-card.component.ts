import {Component} from '@angular/core';
import {productMock} from '../../../shared/products/product.mock';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
    productItem: IProduct = productMock;
    itemImgUrl: string = this.productItem.images[0].url;

    onProductItemBuy(event: Event): void {
        event.stopPropagation();
    }

    isIconActive(iconIndex: number): boolean {
        return this.productItem.rating >= iconIndex;
    }
}
