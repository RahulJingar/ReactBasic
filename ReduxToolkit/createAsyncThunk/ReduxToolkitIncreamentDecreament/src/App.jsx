import React from 'react'
// Counter component ko import kiya jaha tune banaya hai (components/Counter.jsx me)
import { Counter } from './components/Counter'

const App = () => {
  return (
    <div>
      {/* Heading dikhane ke liye */}
      <h1>Redux Toolkit is Here!!</h1>
      
      {/* Counter component ko call kiya, jo increment/decrement/reset karega */}
      <Counter/>
    </div>
  )
}

// App component ko export kiya jisse index.js me use kar saken
export default App
