import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    const data = { email, password };
    console.log(`>>>>>>data>>>>>>`, data);
    const loginData = JSON.parse(localStorage.getItem('user'));

    if (data.email == loginData.email && data.password == loginData.password) {
      navigate('/fetch')
      alert('User login Successfully!!');
    }
    else if (!(data.email == loginData.email && data.password == loginData.password)) {
      alert('Invalid User');
    }
    else if (!(data.email == loginData.email)) {
      alert('Your Email is not Correct');
    } else if (!(data.password == loginData.password)) {
      alert('Your Password is Wrong!!');
    }
  }

  function removeData() {
    const loginData = JSON.parse(localStorage.getItem('user'));
    if (loginData) {
      localStorage.clear();
    } else if (!loginData) {
      alert('Please Signup First');
    }
    setEmail('');
    setPassword('');
  }

  return (
    <form
      onSubmit={loginHandler}
      className="max-w-md mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg flex flex-col gap-5"
    >
      <h1 className="text-3xl font-bold text-center text-red-600 underline">
        Login User
      </h1>

      <input
        type="email"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <input
        type="password"
        value={password}
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <div className="flex justify-between gap-4">
        <button
          type="submit"
          className="w-full bg-green-500 cursor-pointer hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Login
        </button>
        <button
          type="button"
          onClick={removeData}
          className="w-full bg-red-500 cursor-pointer hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Logout
        </button>
      </div>
    </form>
  );
};

export default Login;
