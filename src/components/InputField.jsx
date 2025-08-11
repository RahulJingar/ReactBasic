import React from 'react'

const InputField = () => {
  return (
    <div className='max-w-screen-xl mt-8 mx-auto px-4'>
      <form className='flex flex-col items-center'>
        
        <div className='flex flex-wrap justify-center gap-5 w-full'>
          <input 
            type="text" 
            placeholder='Enter Your Name'
            className='border rounded-sm w-full sm:w-[250px] h-12 px-3'
          />
          <input 
            type="email" 
            placeholder='Enter Your Email'
            className='border rounded-sm w-full sm:w-[250px] h-12 px-3'
          />
          <input 
            type="number" 
            placeholder='Enter Number'   
            className='w-full sm:w-[250px] h-12 border rounded-sm px-3'
          />
        
        </div>

        <textarea 
          placeholder='Enter Comment...'
          className='border w-full sm:w-[500px] h-40 mt-8 p-5 resize-none'
        ></textarea>

        <button className='px-5 py-2 cursor-pointer bg-green-400 hover:bg-green-800 text-white mt-8 rounded-2xl transition-all duration-300'>
          Submit
        </button>

      </form>
    </div>
  )
}

export default InputField
