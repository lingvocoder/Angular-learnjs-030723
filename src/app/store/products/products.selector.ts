import {createFeatureSelector} from '@ngrx/store';
import {PRODUCTS_FEATURE} from './products.reducer';
import {IProductsState, productsAdapter} from './products.state';

// export const productsFeatureSelector = (state: IState) => state[PRODUCTS_FEATURE];
export const productsFeatureSelector = createFeatureSelector<IProductsState>(PRODUCTS_FEATURE);

// export const productsSelector = (state: IState) => {
//     const {ids, entities} = productsFeatureSelector(state);

//     return ids.map(id => entities[id]);
// };
// export const productsSelector = createSelector(
//     productsFeatureSelector,
//     ({ids, entities}: IProductsState) => ids.map(id => entities[id]),
// );

// export const productsIdsSelector = createSelector(productsFeatureSelector, ({ids}) => ids);

// export const productsEntitiesSelector = createSelector(
//     productsFeatureSelector,
//     ({entities}) => entities,
// );

// export const productsSelector = createSelector(
//     productsIdsSelector,
//     productsEntitiesSelector,
//     (ids: IProductsState['ids'], entities: IProductsState['entities']) =>
//         ids.map(id => entities[id]), // extractCb
// );
// export const productsSelector = (state: IState) => extractCb(productsIdsSelector(state), productsEntitiesSelector(state))

// export const {selectIds, selectEntities, selectAll} = productsAdapter.getSelectors();

// export const productsIdsSelector = createSelector(productsFeatureSelector, selectIds);

// export const productsEntitiesSelector = createSelector(productsFeatureSelector, selectEntities);

// export const productsSelector = createSelector(productsFeatureSelector, selectAll);

export const {
    selectIds: productsIdsSelector,
    selectEntities: productsEntitiesSelector,
    selectAll: productsSelector,
} = productsAdapter.getSelectors(productsFeatureSelector);
