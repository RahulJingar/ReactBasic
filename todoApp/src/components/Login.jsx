import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const loginHandle = (e) => {
    e.preventDefault();

    const loginData = JSON.parse(localStorage.getItem('user'))

    if(email == loginData.email && password == loginData.password){
      alert('login successfully!!')
      navigate('/fetch');
    }

    if(!loginData){
        alert('please signup first')
        return;
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-red-400">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>

        <form onSubmit={loginHandle} className="space-y-5">
          
          <input 
            type="email" 
            className="border w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder='Enter Email...'
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input 
            type="password" 
            className="border w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder='Enter Password...'
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button 
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-4 text-gray-600 text-sm">
          Don't have an account? <a href="/signup" className="text-purple-600 font-semibold hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  )
}

export default Login
