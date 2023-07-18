import {Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {IProduct} from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    // encapsulation: ViewEncapsulation.Emulated,
})
export class ProductsListComponent {
    protected readonly productsMock: IProduct[] = productsMock;
    productItemsAdded: object[] = [];

    onCardClick(newProductItem: IProduct) {
        this.addItem(newProductItem);
        // eslint-disable-next-line no-console
        console.log(this.productItemsAdded);
    }

    addItem(newItem: IProduct) {
        this.productItemsAdded.push(newItem);
    }
}
