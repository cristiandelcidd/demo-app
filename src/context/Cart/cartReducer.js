import types from "../../types";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_CART:
      return { ...state, cart: [action.payload, ...state.cart] };

    case types.REMOVE_PRODUCT_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case types.CLEAR_CART:
      return { ...state, cart: [] };

    default:
      return state;
  }
};
