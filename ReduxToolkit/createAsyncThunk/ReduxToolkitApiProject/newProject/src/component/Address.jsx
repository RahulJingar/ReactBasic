import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Address = () => {

  const [name,setName] = useState('');
  const [number,setNumber] = useState('');
  const [email,setEmail] = useState('');
  const [address,setAddress] = useState('');
  const navigate = useNavigate();

  const productHandle = (e) => {
    e.preventDefault();
    if(name && number && email && address){
    navigate('/method')
    }else{
      alert('please fill the data')
    }
  }


  const backHandle = (e) => {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <center>
    <div className='border mx-auto w-1/4 p-5'>
      <form>
        <input 
        type="text" 
        placeholder='Enter Name...'
        className='border w-80 p-2'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <br /><br />


         <input 
        type="number" 
        placeholder='Enter Number...'
        className='border w-80 p-2'
        value={number}
        onChange={(e)=>setNumber(e.target.value)}
        />
        <br /><br />



         <input 
        type="email" 
        placeholder='Enter Email...'
        className='border w-80 p-2'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <br /><br />




         <textarea 
        type="text" 
        placeholder='Enter Address...'
        className='border w-80 p-2'
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        />
        <br /><br />


        <button 
        onClick={productHandle}
        className='px-5 py-2 bg-green-400 hover:bg-green-800 cursor-pointer rounded-sm'>Buy Product</button> <br /> <br />
        <button 
        onClick={backHandle}
        className='px-5 py-2 bg-green-400 hover:bg-green-800 cursor-pointer rounded-sm'>
        Back</button>
      </form>
    </div>
    </center>
  )
}

export default Address
