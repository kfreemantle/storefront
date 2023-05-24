// need axios for making GET requests to the API
import axios from 'axios';

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

// products' action creators
export const decrementStock = (product) => {
  return {
    type: 'DECREMENT_STOCK',
    payload: product,
  };
};

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  dispatch(setProducts(response.data));
  console.log(fetchProducts)
}




export default productsReducer;
