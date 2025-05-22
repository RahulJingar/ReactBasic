import { useState } from "react";

const App = () => {

  const [users,setUsers] = useState([]);
  const [user,setUser] = useState('');

  const handleAddToUsers = () => {
    setUsers([...users,user]);
    setUser('');
  }
  console.log(users);

  const total = users.length;
  const last = users.length;
  const unique = ([...new Set(users)]).length;

  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      marginLeft:'650px'
    }}> 

      <h3>Total Users : {total}</h3>
      <h3>Last Users : {last}</h3>
      <h3>Unique Users : {unique}</h3>

      <input 
      type="text" 
      placeholder="Enter Name"
      onChange={(event)=>setUser(event.target.value)}
      value={user}
      style={{height:'25px', borderRadius:'7px'}}
      />

      <button style={{marginTop:'15px'}} onClick={handleAddToUsers}>AddToUsers</button>

      {
        users.map((item,index) => (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        ))
      }

    </div>
  )
}
export default App;