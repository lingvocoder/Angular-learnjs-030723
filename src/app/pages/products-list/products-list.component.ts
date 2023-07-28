import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {IProduct} from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
    products: IProduct[] | null = null;

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        // this.changeDetectorRef.detach();
        // this.changeDetectorRef.detectChanges();

        setTimeout(() => {
            this.products = productsMock;
            // this.changeDetectorRef.detectChanges();
            this.changeDetectorRef.markForCheck();
        }, 3000);
        setTimeout(() => {
            this.products = productsMock.map(item => ({...item, feedbacksCount: 5}));
            // this.changeDetectorRef.detectChanges();
            // this.changeDetectorRef.reattach();
            this.changeDetectorRef.markForCheck();
        }, 6000);
    }

    onProductBuy(id: IProduct['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    trackById(_index: number, item: IProduct): IProduct['_id'] {
        return item._id;
    }
}
