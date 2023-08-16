import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {EMPTY, catchError, map, switchMap} from 'rxjs';
import {ProductsApiService} from '../../shared/products/products-api.service';
import {addProducts, loadProducts} from './products.actions';
// import {IState} from '../reducer';

@Injectable()
export class ProductsEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly productsApiService: ProductsApiService, // private readonly store$: Store<IState>,
    ) {}

    readonly loadProducts$ = createEffect(
        () =>
            this.actions$.pipe(
                // filter(action => action.type === loadProducts.type),
                ofType(loadProducts),
                switchMap(({subCategoryId}) =>
                    this.productsApiService.getProducts$(subCategoryId).pipe(
                        // tap(products => {
                        //     this.store$.dispatch(addProducts(products));
                        // }),
                        map(products => addProducts(products)),
                        catchError(() => EMPTY),
                    ),
                ),
            ),
        // {dispatch: true},
    );
}
