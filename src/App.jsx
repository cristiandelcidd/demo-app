import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";

import { ProductDetails, ProductsList, NotFound, Cart } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to={"/cart"}>
                <RiShoppingCartLine size={30} />
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
