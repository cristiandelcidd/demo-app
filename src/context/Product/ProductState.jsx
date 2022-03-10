import { useReducer } from "react";

import { products } from "../../../db/products-data.json";

import ProductContext from "../Product/productContext";
import { productReducer } from "../Product/productReducer";
import types from "../../types";

const product = JSON.parse(localStorage.getItem("product")) || [];

export const ProductState = ({ children }) => {
  const {
    data: { items: productItems },
  } = products;

  const initialState = {
    productItems,
    product,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const currentProduct = (projectId) => {
    dispatch({
      type: types.CURRENT_PRODUCT,
      payload: projectId,
    });
  };

  const resetCurrentProduct = () => {
    dispatch({ type: types.RESET_CURRENT_PRODUCT });
    localStorage.setItem("product", JSON.stringify({}));
  };

  return (
    <ProductContext.Provider
      value={{
        product: state.product,
        productItems,
        currentProduct,
        resetCurrentProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
