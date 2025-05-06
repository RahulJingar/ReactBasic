import { useState } from "react"

function App(){
  const [skill, setSkill] = useState([]);
  function handleSkill(event){
    console.log(event.target.value, event.target.checked);

      if(event.target.checked){
        setSkill([...skill, event.target.value]);
      }else{
        setSkill([skill.filter((item)=>item!=event.target.value)])
      }

  }

  return (
    <div>
      <h1>Select Language</h1>
      <input 
      type="checkbox" 
      value="php"
      name="php"
      id="php"
      onChange={handleSkill}
      />
      <label htmlFor="php">PHP</label>

      <br /><br />

      <input 
      type="checkbox" 
      value="cpp"
      name="cpp"
      id="cpp"
      onChange={handleSkill}
      />
      <label htmlFor="cpp">CPP</label>

      <br /><br />

      <input 
      type="checkbox" 
      value="js"
      name="js"
      id="js"
      onChange={handleSkill}
      />
      <label htmlFor="js">JS</label>

      <br /><br />


      <input 
      type="checkbox" 
      value="java"
      name="java"
      id="java"
      onChange={handleSkill}
      />
      <label htmlFor="java">JAVA</label>

    <h1>{skill.toString()}</h1>

    </div>
  )
}
export default App;