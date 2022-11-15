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
    on(removeProduct, (state) => {
      return { ...state, loading: true }
    }),
    on(loadedProducts, (state, { products }) => {
        return { ...state, loading: false, products }
    }),
    on(addedProduct, (state, { product }) => {
      if (state.products.findIndex(p=>p.name===product.name) > -1) return state;

      return {
        products: [...state.products, product],
        loading: true
      }
    }),
    on(editedProduct, (state, { product }) => {
      const index = state.products.findIndex(p=>p.id===product.id);

      if (index === -1) return state;

      const currList = [...state.products];
      currList[index] = product;

      return {
        products: currList,
        loading: true
      }
    }),
    on(removedProduct, (state, { id }) => {
      return {
        products: state.products.filter((p) => p.id !== id),
        loading: true
      }
    })
);
