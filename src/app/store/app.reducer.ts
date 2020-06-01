import * as fromProducts from '../modules/products/store/product.reducer'

export interface AppState {
  products: fromProducts.State;
}


// export const appReducer: ActionReducerMap<AppState> = {
//   productList: fromProducts.productReducer
// }
