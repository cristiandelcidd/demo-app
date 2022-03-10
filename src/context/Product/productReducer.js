export const productReducer = (state, action) => {
  switch (action.type) {
    case "CURRENT_PRODUCT":
      return {
        ...state,
        product: state.productItems.filter(
          (item) => item.id === action.payload
        ),
      };

    case "RESET_CURRENT_PROJECT":
      return {
        ...state,
        product: null,
      };

    default:
      return state;
  }
};
