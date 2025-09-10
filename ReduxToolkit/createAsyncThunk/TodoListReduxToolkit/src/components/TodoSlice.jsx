import { createSlice } from '@reduxjs/toolkit'

// Ek slice banaya jiska naam "TodoSlice" hai
// Ye todos manage karega aur initial state ek khali array [] hai
export const TodoSlice = createSlice({
  name: 'todos',   // slice ka naam "todos" rakha (idhar pehle counter tha, usse confusion hota)
  initialState: [],

  reducers: {
    // addTodo reducer: state (array) me naya object push karega
    // action.payload input text hoga jo humne dispatch ke sath bheja
    addTodo: (state, action) => {
      state.push({ text: action.payload })
    }
  },
})

// Action creator export kiya => ab dispatch(addTodo("task")) kar sakte ho
export const { addTodo } = TodoSlice.actions

// Reducer export kiya jo store me use hoga
export default TodoSlice.reducer
