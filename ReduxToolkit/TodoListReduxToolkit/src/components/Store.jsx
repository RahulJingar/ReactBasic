import { configureStore } from '@reduxjs/toolkit'  
import todoReducer from './TodoSlice'  

// Redux store banaya ja raha hai jisme reducer register karenge
export const store = configureStore({
  reducer: {
    // todos slice ka reducer store me add kiya
    // ab state.todos se todos slice access kar sakte ho
    todos: todoReducer
  }
})
