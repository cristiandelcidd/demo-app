import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProductDetails, ProductsList } from "./components";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
