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

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.activeCategory = action.payload.name;
    },
    reset: () => initialState,
  },
});

// categories' action creators
export const { setCategory, reset } = categoriesSlice.actions;

export default categoriesSlice.reducer;