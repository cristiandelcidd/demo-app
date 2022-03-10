import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductState } from "./context/Product/ProductState";

ReactDOM.render(
  <React.StrictMode>
    <ProductState>
      <App />
    </ProductState>
  </React.StrictMode>,
  document.getElementById("root")
);
