import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs';
import {IProduct} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {SCOPE_NAME} from '../../shared/scope-name/scope-name.token';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // providers: [
    //     {
    //         provide: SCOPE_NAME,
    //         useValue: 'ProductsListComponent',
    //     },
    // ],
})
export class ProductsListComponent {
    readonly products$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('subCategoryId')),
        tap(subCategoryId => {
            this.productsStoreService.loadProducts(subCategoryId);
        }),
        switchMap(() => this.productsStoreService.products$),
    );
    // eslint-disable-next-line dot-notation
    // readonly products$ = this.activatedRoute.data.pipe(map(data => data['products'] as IProduct[]));

    constructor(
        private readonly productsStoreService: ProductsStoreService,
        @Inject(SCOPE_NAME) private readonly scopeName: string,
        private readonly activatedRoute: ActivatedRoute,
    ) {
        // console.log('ProductsListComponent', this.scopeName);
        // eslint-disable-next-line no-console
        console.log(this.activatedRoute.snapshot);
    }

    onProductBuy(id: IProduct['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    trackById(_index: number, item: IProduct): IProduct['_id'] {
        return item._id;
    }
}
