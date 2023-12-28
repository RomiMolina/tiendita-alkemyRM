
import * as actionTypes from './actionsTypes.jsx';


export const setProducts = (products) => ({
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  });
  
  export const filterProducts = (searchTerm) => ({
    type: actionTypes.FILTER_PRODUCTS,
    payload: searchTerm,
  });

  export const addToCart = (product) => ({
    type: actionTypes.ADD_TO_CART,
    payload: product,
  });

  export const removeFromCart = (productId) => ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: { productId },
  });