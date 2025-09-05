import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UseLayout from './UseLayout';
import { useDispatch } from 'react-redux';
import { setUser } from './UserSlice';

const Signup = () => {

  const [name,setName] = useState('');
  const [number,setNumber] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const {change, toggleHandle} = UseLayout();
  const dispatch = useDispatch();


  const data = {
    name,
    number,
    email,
    password
  }


  const signupHandle = (e) => {
    e.preventDefault();
    dispatch(setUser(data));
    if(name && number && email && password){
    navigate('/login')
   }
  }
  

  return (
    <div className={change ? "bg-black text-white" : "bg-white"}>
     <div className='flex justify-end mr-5'>
      <button 
      className='px-5 py-2 bg-zinc-600 cursor-pointer rounded-sm'
      onClick={toggleHandle}>{change ? "Dark Mode" : "Light Mode"}</button>
    </div>
     <div className='border w-1/5 mx-auto p-5 rounded-sm'>
      <form onClick={signupHandle}>
      <input 
      type="text" 
      placeholder='Enter Name...'
      className='border p-2 rounded-sm w-66 text-red-800'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <br /><br />


      <input 
      type="number" 
      placeholder='Enter Number...'
      className='border p-2 rounded-sm w-66 text-red-800'
      value={number}
      onChange={(e)=>setNumber(e.target.value)}
      />
      <br /><br />



      <input 
      type="email" 
      placeholder='Enter Email...'
      className='border p-2 rounded-sm w-66 text-red-800'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <br /><br />



      <input 
      type="password" 
      placeholder='Enter Password...'
      className='border p-2 rounded-sm w-66 text-red-800'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <br /><br />


      
      <center>
        <button className='px-5 py-2 bg-green-400 hover:bg-green-800 rounded-sm cursor-pointer'>SignUp</button>
      </center>
      
      </form>
    </div>
   </div>
  )
}

export default Signup
