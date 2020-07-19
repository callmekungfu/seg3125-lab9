import { ShoppingCartActionTypes } from '../types/Actions';
import { RentalItem } from '../types/Rental';

const shoppingKartDefaultState: RentalItem[] = [];

export default (
  state = shoppingKartDefaultState,
  action: ShoppingCartActionTypes,
): RentalItem[] => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.item];
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.id);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};
