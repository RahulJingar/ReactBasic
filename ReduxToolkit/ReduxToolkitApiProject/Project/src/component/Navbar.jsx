import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "./CartSlice";

export default function Navbar() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <nav className="bg-gray-100 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Navbar</h1>

      <div className="flex gap-6 items-center">
        <Link to="/" className="text-gray-700 hover:text-blue-500">
          All Products
        </Link>

        <Link
          to="/cart"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Cart ({totalQuantity})
        </Link>
      </div>
    </nav>
  );
}
