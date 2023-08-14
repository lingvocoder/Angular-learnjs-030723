import {createReducer, on} from '@ngrx/store';
import {addProducts} from './products.actions';
import {IProductsState, productsAdapter} from './products.state';

export const PRODUCTS_FEATURE = 'products';
const productsInitialState: IProductsState = productsAdapter.getInitialState({
    currentProductId: null,
});

export const productsReducer = createReducer(
    productsInitialState,
    on(addProducts, (state, {products}) => productsAdapter.setAll(products, state)),
);
