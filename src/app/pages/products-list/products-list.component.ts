import {
    ChangeDetectionStrategy,
    Component,
    Host,
    Inject,
    OnInit,
    Optional,
    Self,
    SkipSelf,
} from '@angular/core';
import {Router} from '@angular/router';
import {IProduct} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {SCOPE_NAME} from '../../shared/scope-name/scope-name.token';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: SCOPE_NAME,
            useValue: 'ProductsListComponentElementInjector',
        },
    ],
})
export class ProductsListComponent implements OnInit {
    readonly products$ = this.productsStoreService.products$;

    constructor(
        private readonly productsStoreService: ProductsStoreService,
        @Inject(SCOPE_NAME) @Optional() @Self() private readonly scopeName: string | null,
        @Inject(SCOPE_NAME) @Optional() @SkipSelf() private readonly parentScopeName: string | null,
        @Inject(SCOPE_NAME)
        @Optional()
        @Host()
        @SkipSelf()
        private readonly hostScopeName: string | null,
        private readonly router: Router,
    ) {
        // eslint-disable-next-line no-console
        console.log(`scopeName`, this.scopeName);
        // eslint-disable-next-line no-console
        console.log(`parentScopeName`, this.parentScopeName);
        // eslint-disable-next-line no-console
        console.log(`hostScopeName`, this.hostScopeName);
    }

    ngOnInit(): void {
        this.productsStoreService.loadProducts();
    }

    onProductBuy(id: IProduct['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    trackById(_index: number, item: IProduct): IProduct['_id'] {
        return item._id;
    }

    navigateToProduct() {
        // this.router.navigate(['/product', 'id']);
        this.router.navigateByUrl('/product/id');
    }
}
