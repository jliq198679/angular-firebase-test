import { ProductModel } from "./product.interface";

export interface ProductsState {
    loading: boolean,
    products: ReadonlyArray<ProductModel>;
    error: string | null;
}
