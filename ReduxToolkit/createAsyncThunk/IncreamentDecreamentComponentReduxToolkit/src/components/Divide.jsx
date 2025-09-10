import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { divide } from "../redux/counterSlice";
import { divide } from "./CounterSlice";

export default function Divide() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(divide())}>÷2</button>
    </div>
  );
}
