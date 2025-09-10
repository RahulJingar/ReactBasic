import { createSlice } from "@reduxjs/toolkit";

// Theme ka initial state banaya (default: light mode)
const initialState = {
  dark: false,
};

// Redux Toolkit ka slice banaya
const themeSlice = createSlice({
  name: "theme",      // slice ka naam
  initialState,       // initial state set kiya
  reducers: {
    // toggleTheme reducer: state.dark ka ulta kar deta hai (true->false, false->true)
    toggleTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});

// Action ko export kiya jisse component me dispatch kar sake
export const { toggleTheme } = themeSlice.actions;

// Reducer ko store me use karne ke liye export kiya
export default themeSlice.reducer;
