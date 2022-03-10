import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";
import productContext from "../../context/Product/productContext";

import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const { currentProduct } = useContext(productContext);

  const { id } = useParams();

  return (
    <li className="product-item">
      {product.thumbnailUrl && (
        <img
          src={id ? product?.imageUrl : product?.thumbnailUrl}
          alt={product.name}
        />
      )}
      <div className="product-item__info">
        <div onClick={() => currentProduct(product?.id)}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </div>

        <p>{product.description}</p>

        <h2>${product.price}</h2>
      </div>
    </li>
  );
};

export default ProductItem;
