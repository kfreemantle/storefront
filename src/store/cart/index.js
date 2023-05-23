// cart's initial state
export const initialState = [];

// cart's reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    default:
      return state;
  }
};

// cart's action creators
export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

export default cartReducer;
