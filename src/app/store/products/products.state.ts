import {EntityState, createEntityAdapter} from '@ngrx/entity';
import {IProduct} from '../../shared/products/product.interface';

// export type IProductsState = IProduct[];
// export interface IProductsState {
//     entities: {[id: IProduct['_id']]: IProduct}; // entities[id]
//     ids: Array<IProduct['_id']>;
// }
export interface IProductsState extends EntityState<IProduct> {
    currentProductId: IProduct['_id'] | null;
}

export const productsAdapter = createEntityAdapter<IProduct>({
    selectId: ({_id}: IProduct) => _id,
});
