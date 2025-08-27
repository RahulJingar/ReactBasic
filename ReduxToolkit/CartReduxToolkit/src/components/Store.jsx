import { configureStore } from "@reduxjs/toolkit"; 
// Redux Toolkit ka configureStore import kiya. Ye store banane ka easy tarika hai.

import cartReducer from "./CartSlice"; 
// Apna cartSlice ka reducer import kiya (jo tumne CartSlice.js me banaya tha).

export const store = configureStore({
  reducer: {
    // Yaha saare reducers register karte hain.
    // "cart" ek key hai -> iske andar cartReducer ka state manage hoga.
    cart: cartReducer,
  },
});
