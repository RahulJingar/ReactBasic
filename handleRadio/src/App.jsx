import { useState } from "react"

function App(){

  const [gender, setGender] = useState("female");
  const [city, setCity] = useState("jaipur");

  return (
    <div>
      <h1>Select Gender</h1>
      <input 
      type="radio" 
      name="radio"
      id="male"
      value="male"
      checked={gender=="male"}
      onChange={(event)=>setGender(event.target.value)}
      />
      <label htmlFor="male">male</label>

<input 
      type="radio" 
      name="radio"
      id="female"
      value="female"
      checked={gender=="female"}
      onChange={(event)=>setGender(event.target.value)}
      />
      <label htmlFor="female">female</label>


      <h1>Select Gender: {gender}</h1>


      <select 
      defaultValue={"jaipur"}
      onChange={(event)=>setCity(event.target.value)}>
       <option value="noida">Noida</option>
       <option value="jaipur">Jaipur</option>
       <option value="dausa">Dausa</option>
      </select>

      <h2>Select city: {city}</h2>


    </div>
  )
}
export default App