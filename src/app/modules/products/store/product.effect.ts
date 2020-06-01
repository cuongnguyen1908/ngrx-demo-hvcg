import { Action } from '@ngrx/store';
import { ProductService } from './../../../shared/services/product.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ProductActions from './product.actions';


@Injectable()
export class ProductEffects {

  @Effect()
  getProductList$ = this.action$.pipe(
    ofType(ProductActions.ProductActionTypes.LOAD_PRODUCTS),
    switchMap(() => {
      return this.productService.getAllProduct()
      .pipe(
        map(products => new ProductActions.LoadProductsSuccess(products)
        ), catchError(() => of(new ProductActions.LoadProductsFail()))
      );
    })
  );

  constructor(
    private action$: Actions,
    private productService: ProductService
  ) {}
}
