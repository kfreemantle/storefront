// categories' initial state
export const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: null,
};

// categories' reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload.name,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

// categories' action creators
export const setCategory = (category) => {
  return {
    type: 'SET_CATEGORY',
    payload: category,
  };
};

export const reset = () => {
  return {
    type: 'RESET',
    payload: {},
  };
};

export default categoriesReducer;
