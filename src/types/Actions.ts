import { RentalItem } from './Rental';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  item: RentalItem;
}

export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  id: string;
}

export type ShoppingCartActionTypes = AddToCartAction | RemoveFromCartAction;
export type AppActions = ShoppingCartActionTypes;
