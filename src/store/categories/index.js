export const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  products: [
    // A list of products for sale in our store
    // Each product has a name, category, price, and quantity in stock
    { name: 'Servoskull', category: 'electronics', price: 199.00, inStock: 5 },
    { name: 'Hololith', category: 'electronics', price: 549.00, inStock: 10 },
    { name: 'Comm Bead', category: 'electronics', price: 299.00, inStock: 15 },
    { name: 'Commissar Coat', category: 'clothing', price: 19.00, inStock: 35 },
    { name: 'Commissar Hat', category: 'clothing', price: 32.00, inStock: 15 },
    { name: 'Soylent Green', category: 'food', price: 1.99, inStock: 750 },
    { name: 'Corpse Starch', category: 'food', price: 2.99, inStock: 135 },
    { name: 'Nutrient Packet', category: 'food', price: 5.99, inStock: 200 }
  ],
  activeCategory: null,  // Currently active (selected) category
  filteredProducts: [], // filtered products based on active category
};

// The reducer function for our categories
// Remember reducers take in a state and an action as an input, and return a new state as output
// State is immutable!  Reducers don't modify state directly
// Based on the dispatched action, it will update the state accordingly
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      // When we set a category, update the active category and filter the products
      const activeCategory = action.payload.name;
      const filteredProducts = initialState.products.filter((item) => item.category === activeCategory);
      return {
        ...state,
        activeCategory,
        filteredProducts,
      };
    case 'RESET':
      // When we reset, return to the initial state
      return initialState;
    default:
      // By default, return the current state unchanged
      return state;
  }
};

// Action creators
// These are functions that create and return the actions that we can dispatch

// Action to set a category
export const setCategory = (category) => {
  return {
    type: 'SET_CATEGORY',
    payload: category,
  };
};

// Action to filter products
export const filterProducts = () => {
  return {
    type: 'FILTER_PRODUCTS',
    payload: {},
  };
};

// Action to reset to the initial state
export const reset = () => {
  return {
    type: 'RESET',
    payload: {},
  };
};

export default categoriesReducer;
