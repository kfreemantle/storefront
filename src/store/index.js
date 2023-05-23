import { createStore, combineReducers } from 'redux';
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
