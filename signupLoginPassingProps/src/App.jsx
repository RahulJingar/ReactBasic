import React, { useState } from 'react'
import Signup from './components/Signup'
import Login from './components/Login'

const App = () => {

  const [signup,setSignup] = useState('');


  return (
    <div>
     <Signup SignUp={setSignup}/>
<Login login={signup}/>

    </div>
  )
}

export default App
