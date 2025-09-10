import React, { useState } from "react";
// React se useState import kiya, jo local component state ke liye use hota hai.

import { useDispatch, useSelector } from "react-redux";
// useSelector -> Redux store ka data read karne ke liye
// useDispatch -> Redux actions ko trigger karne ke liye

import { addItem, removeItem, clearCart } from "./components/CartSlice";
// Redux slice (CartSlice) se actions import kiye (addItem, removeItem, clearCart)

const App = () => {
  // local input ka state banaya product name store karne ke liye
  const [product, setProduct] = useState("");

  // Redux store se cart state ko access kiya
  const cart = useSelector((state) => state.cart);

  // Redux ka dispatch hook, jisse hum actions dispatch kar sakte hain
  const dispatch = useDispatch();

  // input me likha hua product cart me add karne ka function
  const addProduct = () => {
    if (product) { // agar product khali nahi hai
      dispatch(addItem(product)); // Redux action call -> addItem
      setProduct(""); // input ko reset kar diya
    }
  };

  return (
    <div>
      <h2>🛒 Redux Toolkit Cart</h2>

      {/* Input box for product name */}
      <input
        type="text"
        value={product}
        placeholder="Enter product"
        onChange={(e) => setProduct(e.target.value)}
      />

      {/* Product add karne ka button */}
      <button onClick={addProduct}>Add</button>

      {/* Pure cart ko empty karne ka button */}
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>

      {/* Cart ke total quantity dikhane ka part */}
      <h3>Total Items: {cart.totalQuantity}</h3>

      {/* Cart ke items ko list me dikhaya */}
      <ul>
        {cart.items.map((item, index) => (
          <li key={index}>
            {item}
            {/* Remove button -> sirf us index ka item delete karega */}
            <button onClick={() => dispatch(removeItem(index))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
