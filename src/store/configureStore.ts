import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import ShoppingCartReducer from '../reducers/ShoppingCart';
import { AppActions } from '../types/Actions';

export const rootReducer = combineReducers({
  shoppingCart: ShoppingCartReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>),
);
