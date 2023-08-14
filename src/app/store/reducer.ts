import {PRODUCTS_FEATURE, productsReducer} from './products/products.reducer';
import {IProductsState} from './products/products.state';

export interface IState {
    [PRODUCTS_FEATURE]: IProductsState;
}

export const stateReducer = {
    [PRODUCTS_FEATURE]: productsReducer,
};
