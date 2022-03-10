import { useReducer } from "react";
import types from "../../types";

import CartContext from "./cartContext";
import { cartReducer } from "./cartReducer";

export const CartState = ({ children }) => {
  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProductCart = (product) => {
    dispatch({
      type: types.ADD_PRODUCT_CART,
      payload: product,
    });
  };

  const removeProductCart = (id) => {
    dispatch({
      type: types.REMOVE_PRODUCT_CART,
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({
      type: types.CLEAR_CART,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addProductCart,
        removeProductCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
