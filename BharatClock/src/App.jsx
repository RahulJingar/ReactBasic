import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {

  const [time,setTime] = useState(new Date());

  useEffect(()=>{
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  },[])
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-5xl font-bold tracking-tighter opacity-70 mb-5'>Bharat Clock</h1>
      <h1>This is the clock that shows the time in Bharat at all times.</h1>
      <h2>{`This is the current time: ${time.toLocaleTimeString()} - ${time.toLocaleDateString()}`}</h2>
    </div>
  )
}

export default App
