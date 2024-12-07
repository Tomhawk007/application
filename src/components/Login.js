import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css'; // Import custom styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();

    // Get registered user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData && email === userData.email && password === userData.password) {
      console.log('Login successful!');
      navigate('/dashboard'); // Redirect to Dashboard
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>EVO-A</h2>
        <h4>evolution-ahead</h4>
        <div className="login-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0e/LinkedIn_Logo_2023.png"
            alt="LinkedIn Logo"
            width="150"
          />
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Sign in
          </button>
        </form>

        <div className="login-footer">
          <Link to="/forgot-password" className="forgot-password">
            Forgot password?
          </Link>
          <p>
            New to EVO-A?{' '}
            <Link to="/register" className="join-now">
              Join now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
