import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {delay, map, switchMap, tap} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {IProduct} from '../../shared/products/product.interface';
// import {ProductsStoreService} from '../../shared/products/products-store.service';
import {BrandsService} from '../../shared/brands/brands.service';
import {IState} from '../../store/reducer';
import {productsSelector} from '../../store/products/products.selector';
import {loadProducts} from '../../store/products/products.actions';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    readonly products$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('subCategoryId')),
        tap(subCategoryId => {
            // this.productsStoreService.loadProducts(subCategoryId);
            this.store$.dispatch(loadProducts(subCategoryId));
        }),
        // switchMap(() => this.productsStoreService.products$),
        switchMap(() => this.store$.pipe(select(productsSelector))),
        delay(1000),
    );

    readonly brands$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('subcategoryId')),
        tap(id => {
            this.brandsService.loadBrands(id);
        }),
        switchMap(() => this.brandsService.brands$),
    );

    constructor(
        // private readonly productsStoreService: ProductsStoreService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly brandsService: BrandsService,
        private readonly store$: Store<IState>,
    ) {
        // this.store$.pipe(map(state => state.products)).subscribe(console.log);
        // this.store$
        //     .pipe(
        //         // map(state => state.products.currentProductId),
        //         // distinctUntilChanged(),
        //         // select(productsFeatureSelector),
        //         // select(({ids, entities}) => ids.map(id => entities[id])),
        //         tap(console.log),
        //         select(productsSelector),
        //     )
        //     .subscribe(console.log);
        // setTimeout(() => {
        //     this.store$.dispatch(setCurrentProduct('product_id'));
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
