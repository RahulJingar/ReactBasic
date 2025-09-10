import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { multiply } from "../redux/counterSlice";
import { multiply } from "./CounterSlice";

export default function Multiply() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(multiply())}>×2</button>
    </div>
  );
}
