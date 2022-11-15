import { ProductsState } from '../../models/product.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectProductsFeature = (state: AppState) => state.products;

export const selectListProducts = createSelector(
    selectProductsFeature,
    (state: ProductsState) => state.products
);

export const selectLoading = createSelector(
    selectProductsFeature,
    (state: ProductsState) => state.loading
);
