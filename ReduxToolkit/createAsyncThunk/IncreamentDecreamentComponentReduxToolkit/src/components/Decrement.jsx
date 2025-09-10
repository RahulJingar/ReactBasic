import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "./CounterSlice";

export default function Decrement() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
}
