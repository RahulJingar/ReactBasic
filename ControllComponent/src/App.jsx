import { useState } from "react"

function App(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Control Component</h1>
      <input 
      type="text" 
      placeholder="enter the name"
      name="name"
      id="name"
      value={name}
      onChange={(event)=>setName(event.target.value)}
      />

      <br /><br />

      <input 
      type="email" 
      name="email"
      id="email"
      placeholder="enter the meial"
      value={email}
      onChange={(event)=>setEmail(event.target.value)}
      />

      <br /><br />

      <input 
      type="password" 
      name="password"
      id="password"
      value={password}
      placeholder="enter the password"
      onChange={(event)=>setPassword(event.target.value)}
      />

<br /><br />


      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{password}</h1>

      <button onClick={()=>{setName(""); setEmail(""); setPassword("")}}>Clear</button>
    </div>
  )
}

export default App;