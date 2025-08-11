import React from 'react';

const Home = () => {
  return (
    <div className='flex flex-col items-center mt-12 px-4'>

     
      <h1 className='text-blue-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-blue-900 cursor-pointer text-center'>
        👋Hey My Name is Rahul Jingar
      </h1>

      <div className='flex flex-col md:flex-row gap-10 items-center mt-12 w-full justify-center'>
      

        <div>
          <img
            className='h-52 sm:h-64 md:h-72 w-72 mt-6 md:mt-0 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtqT61RnM7fx5UHenYwSDmh35WdflsCgYkw&s' 
            alt="Rahul Jingar"
          />
        </div>
          <div className='border p-6 sm:p-8 h-auto bg-amber-100 cursor-pointer hover:bg-blue-500 hover:scale-110 transition-transform duration-500 rounded-2xl max-w-md '>
          I am a Full Stack Developer <br />
          My Passion is MERN Full Stack <br />
          MERN = MongoDB, Express.js, React, Node.js
        </div>
      </div>

      <hr className='w-full mt-12 border-t border-red-200' />
    </div>
  )
}

export default Home;
