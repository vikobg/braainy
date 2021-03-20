import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap, tap, } from 'rxjs/operators';

import * as ProductActions from './product.actions';
import {ProductService} from "../../api/services/product/product.service";
import {GetProductsResponse} from "../../api/services/product/product.types";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(({ page, size }) =>
        this.productService.getAll(page, size).pipe(
          map((response: GetProductsResponse) =>
            ProductActions.loadProductsSuccess({
              response,
            })
          ),
          catchError((error) => of(ProductActions.loadProductsError({ error })))
        )
      )
    )
  );

  errors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ProductActions.loadProductsError,
      ),
      tap(() =>
       this.snackBar.open('Error while loading data occured. Please try again.', 'Error')
      )
),
    {
      dispatch: false
    }
  );


  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private snackBar: MatSnackBar
  ) {}
}
