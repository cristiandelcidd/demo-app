import { useReducer } from "react";
import { cartReducer } from "./cartReducer";

export const CartState = ({ children }) => {
  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);
};
