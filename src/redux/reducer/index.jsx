
import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  products: [], // estado inicial de productos
  filteredProducts: [], // Estado para productos filtrados
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
      case actionTypes.ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
        case actionTypes.REMOVE_FROM_CART:
          return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload.productId),
          };
      case actionTypes.FILTER_PRODUCTS:
      // eslint-disable-next-line no-case-declarations
      const searchTerm = action.payload.toLowerCase();
      // eslint-disable-next-line no-case-declarations
      const filteredProducts = state.products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      );

      return {
        ...state,
        filteredProducts,
      };

    default:
      return state;
  }
};

export default productReducer;
