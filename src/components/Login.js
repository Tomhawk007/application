import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Login.css'; // Import custom styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Add your authentication logic here
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Sign In</h2>
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
          {/* If you want to navigate to Forgot Password page */}
          <Link to="/forgot-password" className="forgot-password">
            Forgot password?
          </Link>
          <p>
            New to LinkedIn?{' '}
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
