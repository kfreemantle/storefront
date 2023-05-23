const initialState = [];

const ADD = 'ADD';
const REMOVE = 'REMOVE';

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((item) => item.name !== action.payload.name);
    default:
      return state;
  }
};

export const addToCart = (item) => ({
  type: ADD,
  payload: item,
});

export const removeFromCart = (item) => ({
  type: REMOVE,
  payload: item,
});

export default cartReducer;
