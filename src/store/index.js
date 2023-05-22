import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// Import the reducer for categories
import categoriesReducer from './categories';

// Combine all reducers into one
// Currently, we only have the categories reducer, but we're definitely going to be adding more here later
let reducers = combineReducers({
  categories: categoriesReducer,
});

// This function creates the redux store
// The store is created by calling createStore with the combined reducers and the Redux DevTools extension
const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();
