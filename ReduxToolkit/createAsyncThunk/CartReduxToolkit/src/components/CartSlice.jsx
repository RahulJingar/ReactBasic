import { createSlice } from "@reduxjs/toolkit"; 
// Redux Toolkit se createSlice import kiya jata hai jo reducer aur actions ko simplify karta hai.

const cartSlice = createSlice({
  name: "cart",  
  // Slice ka naam "cart" rakha. Yeh Redux store me ek unique key ke under store hoga.

  initialState: {
    items: [],          // initially cart me koi item nahi hai, empty array rakha
    totalQuantity: 0,   // cart me total items count track karne ke liye
  },

  reducers: {
    // ✅ 1. Item add karna
    addItem: (state, action) => {
      state.items.push(action.payload);   // action.payload me product ka naam/obj aayega, usko array me push kar diya
      state.totalQuantity += 1;           // total items count +1 kar diya
    },

    // ✅ 2. Item remove karna
    removeItem: (state, action) => {
      // action.payload me index aata hai -> us index wale item ko filter karke hata diya
      state.items = state.items.filter((item, index) => index !== action.payload); 
      state.totalQuantity -= 1; // ek item remove hua to count -1 kar diya
    },

    // ✅ 3. Cart clear karna
    clearCart: (state) => {
      state.items = [];          // saare items hata diye
      state.totalQuantity = 0;   // quantity bhi reset ho gayi
    },
  },
});

// slice se actions (addItem, removeItem, clearCart) export kiye taki component me dispatch kar sake
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// reducer ko export kiya, ye store me add hoga
export default cartSlice.reducer;
