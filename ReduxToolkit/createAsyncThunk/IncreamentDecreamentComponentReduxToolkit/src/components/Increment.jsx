import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { increment } from "../redux/counterSlice";
import { increment } from "./CounterSlice";

export default function Increment() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+1</button>
    </div>
  );
}
