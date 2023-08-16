import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {delay, map, switchMap, take, tap} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {IProduct} from '../../shared/products/product.interface';
// import {ProductsStoreService} from '../../shared/products/products-store.service';
import {BrandsService} from '../../shared/brands/brands.service';
import {IState} from '../../store/reducer';
import {productsSelector} from '../../store/products/products.selector';
import {loadProducts} from '../../store/products/products.actions';
import {getFilterFromQuery} from './filter/query-params/get-filter-from-query';
import {IProductsFilterQueryParams} from './filter/query-params/products-filter-query-params.interface';
import {IProductsFilter} from './filter/products-filter.interface';
import {getQueryFromFilter} from './filter/query-params/get-query-from-filter';

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

    readonly initialFilter$ = this.activatedRoute.queryParams.pipe(
        take(1),
        map(queryParams => getFilterFromQuery(queryParams as IProductsFilterQueryParams)),
    );

    readonly searchName$ = this.activatedRoute.queryParamMap.pipe(
        map(queryParamMap => queryParamMap.get('name')),
    );

    constructor(
        // private readonly productsStoreService: ProductsStoreService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly brandsService: BrandsService,
        private readonly router: Router,
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

    onFilterChange(filter: IProductsFilter) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: getQueryFromFilter(filter),
        });
    }

    trackById(_index: number, item: IProduct): IProduct['_id'] {
        return item._id;
    }
}
