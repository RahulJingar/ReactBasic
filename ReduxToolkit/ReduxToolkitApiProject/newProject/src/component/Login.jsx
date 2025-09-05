import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UseLayout from './UseLayout';
import { useSelector } from 'react-redux';

const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const {change, toggleHandle} = UseLayout();
    const user = useSelector((state) => state.user.currentUser);



  const loginHandle = (e) => {
    e.preventDefault();
    if(!user){
      alert('No user found!!')
      return;
    }
    if((email !== user.email || password !== user.password)){
      alert('Wrong Details!!')
    }else{
      navigate('/');
    }
  }


  return (
    <div className={change ? "bg-black text-white" : "bg-white"}>
      <div className='flex justify-end mr-5'>
        <button
              className='px-5 py-2 bg-zinc-600 cursor-pointer rounded-sm'
        onClick={toggleHandle}>{change ? "Dark Mode":"Light Mode"}</button>
      </div>
      <div className='border w-1/5 mx-auto p-5 rounded-sm'>
        <form onSubmit={loginHandle}>
      <input 
      type="email" 
      placeholder='Enter Email...'
      className='border p-2 rounded-sm w-66 text-red-500'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <br /><br />



      <input 
      type="password" 
      placeholder='Enter Password...'
      className='border p-2 rounded-sm w-66 text-red-500 mb-5'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <br /><br />

<center>
      <button className='px-5 py-2 bg-red-400 hover:bg-red-800 rounded-sm'>Login</button>
</center>

        </form>
    </div>
    </div>
  )
}

export default Login
