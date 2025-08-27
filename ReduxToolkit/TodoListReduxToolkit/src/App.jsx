import React, { useState } from 'react'
import { addTodo } from './components/TodoSlice'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  // Local state input ke liye (text box me user jo likhega)
  const [input, setInput] = useState('');

  // Redux store se todos ka data access kar rahe hain
  const todos = useSelector((state) => state.todos);

  // dispatch function banate hain actions fire karne ke liye
  const dispatch = useDispatch();

  // jab Add button click hoga tab ye function chalega
  const addHandle = () => {
    if (input) { // agar input empty nahi hai
      dispatch(addTodo(input)); // Redux store me new todo add karega
      setInput(''); // input box ko reset kar dega
    }
  }

  return (
    <div>
      {/* Heading */}
      <div>
        <h3>Add to Cart</h3>
      </div>

      {/* Input field for todo */}
      <input 
        type="text" 
        placeholder='Add Todo'
        value={input}
        onChange={(e) => setInput(e.target.value)} // input state update karega
      />

      {/* Button jo addHandle function ko call karega */}
      <button onClick={addHandle}>Add</button>

      {/* todos ko map karke list items render karenge */}
      {todos.map((todo, index) => (
        <li key={index}>{todo.text}</li> // har ek todo ka text dikhana
      ))}
    </div>
  )
}

export default App
