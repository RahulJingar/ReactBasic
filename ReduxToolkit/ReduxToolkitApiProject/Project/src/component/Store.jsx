import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./component/CartSlice";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    allCart: cartReducer,
  },
});

export default store;
