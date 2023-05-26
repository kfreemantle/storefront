import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

// now apply middleware to the store with thunk
const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;