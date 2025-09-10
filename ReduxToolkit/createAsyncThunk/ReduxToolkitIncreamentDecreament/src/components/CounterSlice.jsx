// Redux Toolkit se createSlice import kar rahe hain
import { createSlice } from '@reduxjs/toolkit'

// Initial state define kiya jisme ek hi property "value" hai
const initialState = {
  value: 0, // counter ki starting value 0 hogi
}

// createSlice ka use karke ek pura slice banaya
// Ye slice automatically action creators aur reducer banata hai
export const counterSlice = createSlice({
  name: 'counter',       // slice ka naam, store me "counter" key ke naam se dikhai dega
  initialState,          // starting state jo upar banaya
  reducers: {
    // ✅ increment action -> har call par value +1
    increment: (state) => {
      // Redux Toolkit internally Immer use karta hai, 
      // isliye hum directly state mutate kar sakte hain
      // Ye andar se immutable copy bana leta hai
      state.value += 1
    },

    // ✅ decrement action -> har call par value -1
    decrement: (state) => {
      state.value -= 1
    },

    // ✅ reset action -> value ko firse 0 kar dega
    reset: (state) => {
      state.value = 0
    },

    // ✅ incrementByAmount action -> jitna payload milega uske hisaab se add karega
    // Example: dispatch(incrementByAmount(5)) → value = value + 5
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Har ek reducer ke liye Redux Toolkit khud se action creators banata hai
// Yaha hum unko export kar rahe hain taaki component me dispatch kar saken
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

// Default export -> reducer ko export karna zaruri hai taaki configureStore me use kar saken
export default counterSlice.reducer
