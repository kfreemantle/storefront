import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// Import reducers
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

// Combine all reducers into one. 
// Each reducer will be available under the state key matching the name used here.
let reducers = combineReducers({
  categories: categoriesReducer,  // categories state will be managed by the categoriesReducer
  products: productsReducer,      // products state will be managed by the productsReducer
  cart: cartReducer,              // cart state will be managed by the cartReducer
});

// This function creates the redux store.
// The store is created by calling createStore with the combined reducers and the Redux DevTools extension.
const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();
