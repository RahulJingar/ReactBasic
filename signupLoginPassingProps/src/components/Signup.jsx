import React, { useState } from 'react';

const Signup = ({ SignUp }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function formSubmit(e) {
    e.preventDefault();
    
    const data = {
      name,
      phone,
      email,
      password,
    };

    SignUp(data); 
    alert('User signed up successfully!');

    setName('');
    setPhone('');
    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
