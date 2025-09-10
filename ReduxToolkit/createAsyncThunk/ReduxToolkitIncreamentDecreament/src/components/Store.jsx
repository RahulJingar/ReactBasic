// Redux Toolkit se configureStore import kar rahe hain
import { configureStore } from '@reduxjs/toolkit'

// CounterSlice se reducer import kiya (default export tha isliye naam kuch bhi rakh sakte hain)
import counterReducer from './CounterSlice'

// configureStore ka use karke ek store banaya
export const store = configureStore({
  reducer: {
    // yaha "counter" ek key hai jo store ke state object me use hogi
    // aur is key ke andar "counterReducer" ka state manage hoga
    counter: counterReducer,
  },
})
