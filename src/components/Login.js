// function Login(){
//     return (
//     <div>
//         This is Login page hellooooo
//     </div>
//       )
//     }
// export default Login;

// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
      // Check if email and password match
      if (input.email === user.email && input.password === user.password) {
        console.log('Login successful');
        navigate('/dashboard'); // Redirect to dashboard after login
      } else {
        setError('Incorrect email or password');
      }
    } else {
      setError('No registered user found. Please sign up first.');
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center text-info">Login</h3>
      <form className="form">
        <div className="form-group">
          <label htmlFor="email" className="text-info">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={input.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="text-info">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={input.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {error && <p className="text-danger text-center">{error}</p>}

        <button type="button" onClick={handleLogin} className="btn btn-info btn-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
