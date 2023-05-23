const initialState = [];

const ADD = 'ADD';
const REMOVE = 'REMOVE';

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

export const addToCart = (item) => ({
  type: ADD,
  payload: item,
});

export const removeFromCart = (index) => ({
  type: REMOVE,
  payload: index,
});

export default cartReducer;
