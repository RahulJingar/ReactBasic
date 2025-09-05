// store.js
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import UserSlice from './UserSlice';

const store = configureStore({
  reducer: {
    products: productsSlice,
    user: UserSlice,
  },
});

export default store;
