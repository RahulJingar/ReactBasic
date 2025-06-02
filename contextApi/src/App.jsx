import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./Context";



const App = () => {
  const [subject,setSubject] = useState('');
  return (
    <div style={{backgroundColor:'yellow', padding:10}}>
      <SubjectContext.Provider value={subject}>

          <div style={{display:'flex', justifyContent:'center', gap:'20px'}}>
             <select style={{padding:10, width:180, backgroundColor:'black', color: 'white'}} value={subject} onChange={(event)=>setSubject(event.target.value)}>
        <option value="">Select Subject</option>
        <option value="Science">Science</option>
        <option value="Physics">Physics</option>
        <option value="Reasoning">Reasoning</option>
        <option value="Chemistry">Chemistry</option>
      </select>

        <button style={{width:180, backgroundColor:'black', color: 'white', padding:10,}} onClick={()=>setSubject('')}>Clear Subject</button>
   
          </div>

          <h1>Context API</h1>

      <College/>
      </SubjectContext.Provider>
    </div>
  )
}
export default App;