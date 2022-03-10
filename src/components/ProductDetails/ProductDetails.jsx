import { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductItem } from "../index";
import productContext from "../../context/Product/productContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { resetCurrentProduct, product } = useContext(productContext);

  localStorage.setItem(
    "product",
    JSON.stringify(product[0] || JSON.parse(localStorage.getItem("product")))
  );

  const productItem = JSON.parse(localStorage.getItem("product"));

  return (
    <div className="product-details">
      <p onClick={resetCurrentProduct}>
        <Link to={"/"}>&lt; Back To List</Link>
      </p>
      <ProductItem product={productItem} />
    </div>
  );
};

export default ProductDetails;
