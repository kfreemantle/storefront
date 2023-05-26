// need axios for making GET requests to the API
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// products' initial state
export const initialState = [
  { name: 'Servoskull', category: 'electronics', price: 199.00, inStock: 5 },
  { name: 'Hololith', category: 'electronics', price: 549.00, inStock: 10 },
  { name: 'Comm Bead', category: 'electronics', price: 299.00, inStock: 15 },
  { name: 'Commissar Coat', category: 'clothing', price: 19.00, inStock: 35 },
  { name: 'Commissar Hat', category: 'clothing', price: 32.00, inStock: 15 },
  { name: 'Soylent Green', category: 'food', price: 1.99, inStock: 750 },
  { name: 'Corpse Starch', category: 'food', price: 2.99, inStock: 135 },
  { name: 'Nutrient Packet', category: 'food', price: 5.99, inStock: 200 }
];

// products' action creator
export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  };
};

// products' reducer
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
    case 'DECREMENT_STOCK':
      return state.map(product =>
        product.name === action.payload.name
          ? { ...product, inStock: product.inStock - 1 }
          : product
      );
    default:
      return state;
  }
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state = action.payload;
    },
    decrementStock: (state, action) => {
      const product = state.find(product => product.name === action.payload.name);
      if (product) {
        product.inStock -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

// products' action creators
export const decrementStock = (product) => {
  return {
    type: 'DECREMENT_STOCK',
    payload: product,
  };
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { dispatch }) => {
    const response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
    return response.data;
  }
);

export const createProduct = (product) => async (dispatch) => {
  try {
    const response = await axios.post(`https://api-js401.herokuapp.com/api/v1/products`, product);

    if (response.status === 201) {
      // After the server responds successfully, re-fetch the list of products
      dispatch(fetchProducts());
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = (product) => async (dispatch) => {
  try {
    const response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);

    if (response.status === 200) {
      // After the server responds successfully, re-fetch the list of products
      dispatch(fetchProducts());
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = (product) => async (dispatch) => {
  try {
    const response = await axios.delete(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`);

    if (response.status === 200) {
      // After the server responds successfully, re-fetch the list of products
      dispatch(fetchProducts());
    }
  } catch (error) {
    console.error(error);
  }
};

export const { setProducts, decrementStock } = productsSlice.actions;

export default productsSlice.reducer;