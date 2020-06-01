import { Cart } from './../../../shared/models/card/cart.model';
import { Product } from 'src/app/shared/models/products/product.model';
import * as ProductActions from './product.actions';

export interface State {
  productList: Product[];
  cart: { name: string; quantity: number, price: number }[];
}
const initialState: State =
{
  productList: [],
  cart: [],
};

export function productReducer(
  state = initialState,
  action: ProductActions.ProductsActions
) {
  switch (action.type) {
    case ProductActions.ProductActionTypes.LOAD_PRODUCTS: {
      return {
        ...state,
      };
    }

    case ProductActions.ProductActionTypes.LOAD_PRODUCTS_SUCCESS: {
      return {
        ...state,
        productList: [...action.payload],
      };
    }
    case ProductActions.ProductActionTypes.LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        productList: [],
      };
    }

    case ProductActions.ProductActionTypes.ADD_TO_CART: {
      const { quantity = 0 } =
        state.cart.find(
          (productInCart) => productInCart.name === action.payload.name
        ) || {};

      return {
        ...state,
        cart: [
          ...state.cart.filter((x) => x.name !== action.payload.name),
          {
            name: action.payload.name,
            quantity: quantity + 1,
            price: action.payload.price
          },
        ],
      };
    }
    default:
      return state;
  }
}
