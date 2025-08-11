import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const allError = {};
    if (!name) allError.name = 'Name is required';
    if (!email) allError.email = 'Email is required';
    if (!phone) allError.phone = 'Phone is required';
    if (!password) allError.password = 'Password is required';

    setError(allError);

    if(name && phone && email && password){
      navigate('/login')
    }

    const data = { name, phone, email, password };
    console.log('>>>>data>>>>>>', data);
    localStorage.setItem('user', JSON.stringify(data));
    alert('User signup successfully!!');

    setName('');
    setPhone('');
    setEmail('');
    setPassword('');
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-md mx-auto mt-10 p-8 bg-white shadow-md rounded-xl flex flex-col gap-5"
    >
      <h1 className="text-3xl font-bold text-center text-green-700 underline">
        Signup User
      </h1>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
       <p className="text-red-500 text-sm mt-1">{error.name}</p>
      </div>

      <div>
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter Number"
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
       <p className="text-red-500 text-sm mt-1">{error.phone}</p>
      </div>

      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <p className="text-red-500 text-sm mt-1">{error.email}</p>
      </div>

      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <p className="text-red-500 text-sm mt-1">{error.password}</p>
      </div>

      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-300"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
