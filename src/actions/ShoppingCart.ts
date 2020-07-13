import {
  AddToCartAction,
  RemoveFromCartAction,
  AppActions,
} from '../types/Actions';
import { Dispatch } from 'react';
import { RentalItem } from '../types/Rental';

export const addToCart = (item: RentalItem): AddToCartAction => ({
  item,
  type: 'ADD_TO_CART',
});

export const removeFromCart = (id: string): RemoveFromCartAction => ({
  id,
  type: 'REMOVE_FROM_CART',
});

export const startAddToCart = (item: RentalItem, quantity: number) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(addToCart(item));
  };
};

export const startRemoveFromCart = (id: string) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(removeFromCart(id));
  };
};
