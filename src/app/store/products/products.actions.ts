import {createAction} from '@ngrx/store';
import {IProduct} from '../../shared/products/product.interface';

export enum ProductsActionTypes {
    LoadProducts = '[Products] Load products',
    AddProducts = '[Products] Add products',
    SetCurrentProduct = '[Products] Set current product',
}

export const loadProducts = createAction(
    ProductsActionTypes.LoadProducts,
    (subCategoryId?: string | null) => ({subCategoryId}),
);

export const addProducts = createAction(
    ProductsActionTypes.AddProducts,
    (products: IProduct[]) => ({products}), // cb
);

export const setCurrentProduct = createAction(
    ProductsActionTypes.SetCurrentProduct,
    (productId: IProduct['_id']) => ({productId}),
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
