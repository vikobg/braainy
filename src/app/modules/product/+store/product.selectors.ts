import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromProduct from './product.reducer';
import {productAdapter} from './product.reducer';

const { selectAll } = productAdapter.getSelectors();

export const selectProjectState = createFeatureSelector<fromProduct.ProductState>(
  fromProduct.productFeatureKey,
);

export const selectProjects = createSelector(
  selectProjectState,
  (state: fromProduct.ProductState) => selectAll(state)
);

export const selectLoaded = createSelector(
  selectProjectState,
  (state: fromProduct.ProductState) => state.loaded
);
