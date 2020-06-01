import { Action } from '@ngrx/store';
import { Product } from 'src/app/shared/models/products/product.model';


export enum ProductActionTypes {
  LOAD_PRODUCTS = '[Product] Load Products',
  LOAD_PRODUCTS_SUCCESS = '[Product] Load Products Success',
  LOAD_PRODUCTS_FAIL = '[Product] Load Products Fail',

  LOAD_PRODUCT = '[Product] Load Product',
  LOAD_PRODUCT_SUCCESS = '[Product] Load Product Success',
  LOAD_PRODUCT_FAIL = '[Product] Load Product Fail',

  ADD_TO_CART = '[Card] Add to Card',

}

// Products


export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS;


} //without payload

export class LoadProductsSuccess implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
} // With payload



export class LoadProductsFail implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_FAIL;
  constructor(public payload?: any) {}
}

// CARD
export class AddToCart implements Action {
  readonly type = ProductActionTypes.ADD_TO_CART;

  constructor(public payload: {name: string, price: number}) { }
}


// Product

 // export
export type ProductsActions =
  | LoadProducts
  | LoadProductsSuccess
  | LoadProductsFail
  | AddToCart;
