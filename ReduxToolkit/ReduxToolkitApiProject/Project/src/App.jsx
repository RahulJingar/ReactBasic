import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from './component/Navbar'

import ProductCard from './component/ProductCard'
import CartPage from "./component/CartPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductCard/>} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;