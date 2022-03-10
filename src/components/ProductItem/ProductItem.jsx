import { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import cartContext from "../../context/Cart/cartContext";
import productContext from "../../context/Product/productContext";

import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const { currentProduct } = useContext(productContext);
  const { addProductCart, removeProductCart, cart } = useContext(cartContext);

  const { id } = useParams();
  const { pathname } = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    addProductCart(product);

    Toastify({
      text: "Producto Agregado",
      className: "info",
      style: {
        background: "linear-gradient(to right, #000000, #7e7e7e)",
      },
    }).showToast();
  };

  return (
    <li className="product-item">
      {product?.thumbnailUrl && (
        <img
          src={id ? product?.imageUrl : product?.thumbnailUrl}
          alt={product.name}
        />
      )}
      <div className="product-item__info">
        {id && (
          <small>
            {product.category} &gt; {product.subcategory}
          </small>
        )}
        {id ? (
          <h2>{product.name}</h2>
        ) : (
          <div onClick={() => currentProduct(product?.id)}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </div>
        )}

        <p>{product.description}</p>

        <h2>${product.price}</h2>

        {id && (
          <button type="submit" className="add-cart" onClick={handleSubmit}>
            Add Cart
          </button>
        )}

        {pathname === "/cart" && (
          <button
            className="delete"
            onClick={() => removeProductCart(product.id)}
          >
            <AiOutlineDelete size={30} />
          </button>
        )}
      </div>
    </li>
  );
};

export default ProductItem;
