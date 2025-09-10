import React from "react";
import { useSelector } from "react-redux";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Multiply from "./Multiply";
import Divide from "./Divide";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <Increment />
      <Decrement />
      <Multiply />
      <Divide />
    </div>
  );
}
