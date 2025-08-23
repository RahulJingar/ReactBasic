import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const data = { name, number, email, password };

  const signUpHandle = (e) => {
    e.preventDefault();
   
    console.log(`>>>>>data>>>>>>`, data);
    if (name && number && email && password) {
      alert('Signup successful! You can now login');
       localStorage.setItem('user', JSON.stringify(data));
    navigate('/login');
    }else{
      alert('please fill input field')
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-400 via-teal-400 to-blue-400">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>

        <form onSubmit={signUpHandle} className="space-y-5">
          <input
            type="text"
            placeholder="Enter Name..."
            className="border w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter Number..."
            className="border w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email..."
            className="border w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password..."
            className="border w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold"
          >
            Signup
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600 text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-green-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
