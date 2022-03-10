import { useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

import cartContext from "../../context/Cart/cartContext";
import ProductItem from "../ProductItem/ProductItem";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart } = useContext(cartContext);

  const handleClearCart = (e) => {
    e.preventDefault();

    clearCart();
  };

  return (
    <div className="cart">
      <div className="home-button">
        <Link to={"/"}>
          <AiOutlineHome size={40} />
        </Link>
      </div>
      {cart.length === 0 ? (
        <h2>No hay elementos</h2>
      ) : (
        <ul className="cart-list">
          {cart.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </ul>
      )}

      <button
        type="submit"
        disabled={cart.length === 0}
        onClick={handleClearCart}
        className="cart-clean"
      >
        Vaciar Carrito
      </button>
    </div>
  );
};

export default Cart;
