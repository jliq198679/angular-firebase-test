import { ProductsState } from './../models/product.state';
import { ActionReducerMap } from "@ngrx/store";
import { productsReducer } from "./reducers/products.reducers";

export interface AppState {
    products: ProductsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    products: productsReducer
}
