import { useContext } from "react";

import { ProductItem } from "../index";
import productContext from "../../context/Product/productContext";

import "./ProductsList.css";

const ProductsList = () => {
  const { productItems } = useContext(productContext);

  return (
    <div className="products-list">
      <h1>Products List</h1>
      <ul>
        {productItems.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
