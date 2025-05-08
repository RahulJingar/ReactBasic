import { useState } from "react"
import Clock from "./Clock"

const App = () => {

  const [color, setColor] = useState('pink')

  return (
    <div>
      <h1>Latest Clock Time</h1>
      <select onChange={(event)=>setColor(event.target.value)}>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="pink">Pink</option>
        <option value="purple">Purple</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>

        <Clock color={color}/>

    </div>
  )
}
export default App