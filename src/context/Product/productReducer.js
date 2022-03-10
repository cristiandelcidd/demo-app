import types from "../../types";

export const productReducer = (state, action) => {
  switch (action.type) {
    case types.CURRENT_PRODUCT:
      return {
        ...state,
        product: state.productItems.filter(
          (item) => item.id === action.payload
        ),
      };

    case types.RESET_CURRENT_PRODUCT:
      return {
        ...state,
        product: null,
      };

    default:
      return state;
  }
};
