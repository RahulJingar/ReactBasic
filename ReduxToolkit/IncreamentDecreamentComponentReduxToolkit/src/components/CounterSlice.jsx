import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    multiply: (state) => { state.value *= 2; },
    divide: (state) => { state.value /= 2; },
  },
});

export const { increment, decrement, multiply, divide } = counterSlice.actions;
export default counterSlice.reducer;
