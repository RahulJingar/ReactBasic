import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";

export default function ProductCard() {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-2">₹ {item.price}</p>
            <button
              onClick={() => dispatch(addToCart(item))}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
