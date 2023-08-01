import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IProduct} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
    // private readonly backendService = new BackendService();
    // private readonly productsStoreService = new ProductsStoreService(
    //     new HttpClient(
    //         backendService,
    //         new AjaxServce(
    //             backendService,
    //         ),
    //     )
    // );
    readonly products$ = this.productsStoreService.products$;

    // for easy
    name = 'Мышь';

    // for hard
    readonly propertyName = 'feedbacksCount' as const; // keyof IProduct
    searchPropertyValue = 2;

    // constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}
    // constructor(@Inject(ProductsStoreService) private readonly productsStoreService: ProductsStoreService) {}
    constructor(
        private readonly productsStoreService: ProductsStoreService, // @Inject('ProductsStoreService') // private readonly productsStoreServiceString: ProductsStoreService,
    ) {
        // eslint-disable-next-line no-console
        // console.log(this.productsStoreServiceString);
    }

    ngOnInit(): void {
        this.productsStoreService.loadProducts();

        // setTimeout(() => {
        //     this.products = productsMock;
        //     this.changeDetectorRef.markForCheck();
        // }, 3000);
    }

    onProductBuy(id: IProduct['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    trackById(_index: number, item: IProduct): IProduct['_id'] {
        return item._id;
    }
}
