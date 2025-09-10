import React from "react";
// React ko import kiya taaki component bana sakein

import { useSelector, useDispatch } from "react-redux";
// useSelector -> Redux store se data read karne ke liye
// useDispatch -> Redux actions ko trigger (dispatch) karne ke liye

// CounterSlice se actions import kiye
// increment -> count badhata hai
// decrement -> count ghatata hai
// reset -> count ko 0 ya initial state par le jaata hai
import { increment, decrement, reset } from "./CounterSlice";

export function Counter() {
  // useSelector -> store ke andar se counter state ka "value" read kar raha hai
  // yani state.counter.value me jo value hogi vo "count" variable me aa jayegi
  const count = useSelector((state) => state.counter.value);

  // useDispatch -> ek function deta hai jo redux actions ko fire karne ka kaam karega
  const dispatch = useDispatch();

  return (
    <div>
      {/* Current counter value dikhane ke liye */}
      <h3>{count}</h3>

      <div>
        {/* increment button -> click karte hi increment() action dispatch karega */}
        <button onClick={() => dispatch(increment())}>Increment</button>

        {/* decrement button -> click karte hi decrement() action dispatch karega */}
        <button onClick={() => dispatch(decrement())}>Decrement</button>

        {/* reset button -> click karte hi reset() action dispatch karega */}
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}
