import React, { useState } from 'react'

const Method = () => {

  const [cash,setCash] = useState('');

  const successHandle = (e) => {
    e.preventDefault()
    if(cash)
    alert(`This is Your Order please give me some time we will deliver to your address
        payment Mode: ${cash}
      `)
  }

  return (
    <div className='flex flex-col w-1/4 mx-auto mt-8'>
      <select
        className='border rounded-sm p-1 mb-5'
        value={cash} onChange={(e)=>setCash(e.target.value)}
      >
        <option
        >Select Mode</option>
        <option value="Amozon Pay">Amazon Pay</option>
        <option value="Upi">Upi Mode</option>
        <option value="Online">Online Mode</option>
        <option value="COD">Cash on Delivery</option>
      </select>
      <p 
      className='mb-5'
      >Payment Method: {cash}</p>
      <button
      onClick={successHandle}
      className='px-5 py-2 bg-blue-500 hover:bg-blue-900 cursor-pointer rounded-sm'>Payment Successfully</button>
    </div>
  )
}

export default Method
