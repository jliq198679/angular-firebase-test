import { ProductModel } from './../../models/product.interface';
import { createAction, props } from '@ngrx/store';

export enum ACTIONS {
  loadProducts = '[Product List] Load products',
  addProduct = '[Product List] Add product',
  editProduct = '[Product List] Edit product',
  removeProduct = '[Product List] Remove product',
  loadedProducts = '[Product List] Loaded success',
  addedProduct =  '[Product List] Added success',
  editedProduct = '[Product List] Edited success',
  removedProduct = '[Product List] Removed success'
}

export const loadProducts = createAction(
    ACTIONS.loadProducts
);

export const addedProduct = createAction(
  ACTIONS.addedProduct
);

export const editedProduct = createAction(
  ACTIONS.editedProduct
);

export const removedProduct = createAction(
  ACTIONS.removedProduct
);

export const loadedProducts = createAction(
  ACTIONS.loadedProducts,
  props<{ products: ProductModel[] }>()
)

export const addProduct = createAction(
  ACTIONS.addProduct,
  props<{ product: ProductModel }>()
)

export const editProduct = createAction(
  ACTIONS.editProduct,
  props<{ product: ProductModel }>()
)

export const removeProduct = createAction(
  ACTIONS.removeProduct,
  props<{ id: string }>()
);
