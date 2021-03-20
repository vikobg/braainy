import {Action, createReducer, on} from '@ngrx/store';
import * as ProductActions from './product.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Product} from "../../api/services/product/product.types";

export const productFeatureKey = 'product';


export interface ProductState extends EntityState<Product> {
  loaded: boolean;
  error?: any;
}

export interface ProductPartialState {
  readonly [productFeatureKey]: ProductState;
}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductState = productAdapter.getInitialState({
  loaded: false,
});

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loaded: false,
  })),
  on(ProductActions.loadProductsSuccess, (state, { response }) =>
    productAdapter.setAll(response.products, {
      ...state,
      loaded: true,
    })
  ),
  on(ProductActions.loadProductsError, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
);

export function reducer(state: ProductState | undefined, action: Action): any {
  return productReducer(state, action);
}
