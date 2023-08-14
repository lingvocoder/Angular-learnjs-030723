import {createAction} from '@ngrx/store';
import {IProduct} from '../../shared/products/product.interface';

export enum ProductsActionTypes {
    AddProducts = '[Products] Add products',
}

export const addProducts = createAction(
    ProductsActionTypes.AddProducts,
    (products: IProduct[]) => ({products}), // cb
);

// addProducts([...]) => {type: ProductsActionTypes.AddProducts, products: [...]}

/**
 * addProducts([...])
 *
 * |
 * v
 *
 * {
 *      type: ProductsActionTypes.AddProducts,
 *      ...cb([...]),
 * }
 */

// Как было раньше

/**
 * export class AddProducts {
 *      readonly type: ProductsActionTypes.AddProducts
 *
 *      constructor(readonly products: IProduct[]) {}
 * }
 *
 * new AddProducts([...]) => {type: ProductsActionTypes.AddProducts, products: [...]}
 */
