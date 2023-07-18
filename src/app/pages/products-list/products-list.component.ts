import {Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {IProduct} from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    readonly products = productsMock;

    onProductBuy(id: IProduct['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    // constructor() {
    //     // eslint-disable-next-line no-console
    //     console.log('ProductsListComponent: constructor');
    // }

    // ngOnChanges(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('ProductsListComponent: OnChanges');
    // }

    // ngOnInit(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('ProductsListComponent: OnInit');
    // }

    // ngDoCheck(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('ProductsListComponent: DoCheck');
    // }

    // ngAfterContentInit(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('ProductsListComponent: AfterContentInit');
    // }

    // ngAfterContentChecked(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('ProductsListComponent: ngAfterContentChecked');
    // }

    // ngAfterViewInit(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('ProductsListComponent: AfterViewInit');
    // }

    // ngAfterViewChecked(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('ProductsListComponent: AfterViewChecked');
    // }
}
