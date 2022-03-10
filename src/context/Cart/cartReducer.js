import cartTypes from "../../types";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case cartTypes.ADD_ITEM:
      return { ...state, cart: [...state.cart, action.payload] };

    case cartTypes.DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};
