import { useState } from "react";

const Login = ({login}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function loginHandler(e) {
    e.preventDefault();

    if (login && login.email === email && login.password === password) {
      alert('User login successfully');
    } else {
      alert('Invalid user ID');
    }

    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit={loginHandler}>
      <br /><br />
      <input 
        type="email" 
        value={email}
        placeholder='Enter Email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />
      <input 
        type="password" 
        value={password}
        placeholder='Enter Password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <button>Login</button>
    </form>
  );
};

export default Login
