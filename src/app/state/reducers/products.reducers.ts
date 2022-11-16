import { ProductsState } from './../../models/product.state';
import { loadProducts, removeProduct, addProduct, editProduct, addedProduct, editedProduct, removedProduct } from './../actions/products.actions';
import { loadedProducts } from '../actions/products.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: ProductsState = {
  loading: false,
  products: []
}

export const productsReducer = createReducer(
    initialState,
    on(loadProducts, (state) => {
        return { ...state, loading: true }
    }),
    on(addProduct, (state) => {
      return { ...state, loading: true }
    }),
    on(editProduct, (state) => {
      return { ...state, loading: true }
    }),
    on(removeProduct, (state, { id }) => {
      return { ...state, loading: true }
    }),
    on(loadedProducts, (state, { products }) => {
        return { ...state, loading: false, products }
    }),
    on(addedProduct, (state) => {
      return { ...state, loading: false }
    }),
    on(editedProduct, (state) => {
      return { ...state, loading: false }
    }),
    on(removedProduct, (state) => {
      return { ...state, loading: false }
    })
);
