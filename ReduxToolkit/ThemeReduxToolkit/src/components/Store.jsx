import { configureStore } from "@reduxjs/toolkit";  
// Redux Toolkit ka configureStore import kiya jo humara global Redux store banata hai

import themeReducer from "./ThemeSlice";  
// ThemeSlice file se jo reducer export kiya gaya hai usko import kar liya
// Ye reducer theme ko toggle/handle karega (light/dark ya jo bhi tu banaye)

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    // store me "theme" naam ka ek slice register ho gaya
    // ab state.theme se tu Redux state access kar sakta hai
  },
});
