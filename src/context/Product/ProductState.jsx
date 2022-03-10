import { useReducer } from "react";

import { products } from "../../../db/products-data.json";
import ProductContext from "../Product/productContext";
import { productReducer } from "../Product/productReducer";

export const ProductState = ({ children }) => {
  const {
    data: { items: productItems },
  } = products;

  const product = localStorage.getItem("product") || [];

  const initialState = {
    productItems,
    product,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const currentProduct = (projectId) => {
    dispatch({
      type: "CURRENT_PRODUCT",
      payload: projectId,
    });
  };

  const resetCurrentProduct = () => {
    dispatch({ type: "RESET_CURRENT_PROJECT" });
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
