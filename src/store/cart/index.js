import axios from 'axios';
import { decrementStock } from '../products';  // import the decrementStock action creator
import { createAsyncThunk } from '@reduxjs/toolkit';

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

export const addToCartInServer = createAsyncThunk(
  'cart/addToCartInServer',
  async (product, { dispatch, getState }) => {
    try {
      const response = await axios.post(`https://api-js401.herokuapp.com/api/v1/cart`, {
        // data structure depends on your API
        productId: product._id,
        quantity: 1,
      });

      if (response.status === 201) {
        dispatch(addToCart(product));
      }
    } catch (error) {
      console.error(error);
    }
  }
);

// cart's action creators
export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

export const addToCartInServer = (product) => async (dispatch, getState) => {
  try {
    const response = await axios.post(`https://api-js401.herokuapp.com/api/v1/cart`, {
      // data structure depends on your API
      productId: product._id,
      quantity: 1,
    });

    if (response.status === 201) {
      dispatch(addToCart(product));
    }
  } catch (error) {
    console.error(error);
  }
};


export default cartReducer;
