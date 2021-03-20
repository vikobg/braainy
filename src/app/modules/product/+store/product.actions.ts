import { createAction, props } from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {GetProductsResponse} from "../../api/services/product/product.types";

const name = (action: string) =>  `[Product] ${action}`;

export const loadProducts = createAction(
  name('Load Products'),
  props<{ page: number, size: number }>()
);

export const loadProductsSuccess = createAction(
  name('Load Products Success'),
  props<{ response: GetProductsResponse }>()

);
export const loadProductsError = createAction(
  name('Load Products Error'),
  props<{ error: HttpErrorResponse }>()
);

