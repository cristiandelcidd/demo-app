import React from "react";
import { render } from "react-dom";

import "./index.css";
import App from "./App";
import { ProductState } from "./context/Product/ProductState";
import { CartState } from "./context/Cart/CartState";

render(
  <React.StrictMode>
    <ProductState>
      <CartState>
        <App />
      </CartState>
    </ProductState>
  </React.StrictMode>,
  document.getElementById("root")
);
