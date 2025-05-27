import React, { useId } from 'react'

const App = () => {
  const name = useId()
  const email  = useId()
  const password  = useId()
  const gmail  = useId()
  return (
    <div>
    <UserForm/>
    <hr style={{width:'1530px'}} />
    <br /><br />
    <UserForm/>
  
    </div>
  )
}


const UserForm = () => {
  const user = useId();
  return (
    <div style={{marginLeft:'550px'}}>
     <form action="">
      <label htmlFor={user + 'name'}>Enter User Name</label>
      <input 
      type="text" 
      placeholder='Enter Name'
      id={user + 'name'}
      />
      <br /><br />


      <label htmlFor={user + 'password'}>Enter User Password</label>
      <input 
      type="password" 
      placeholder='Enter Password'
      id={user + 'password'}
      />
      <br /><br />




      
         <label htmlFor={user + 'skills'}>Enter User Skills</label>
      <input 
      type="text" 
      placeholder='Enter Skills'
      id={user + 'skills'}
      />


      <br /><br />
      <input 
      type="checkbox" 
      id={user + 'terms'}
      />
         <label htmlFor={user + 'terms'}>Terms and Condition</label>
      <br /><br />
      <br /><br />

     </form>

    </div>
  )
}

export default App
