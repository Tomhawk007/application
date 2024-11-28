// src/components/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Register.css'; // Import custom styles

const Register = () => {
  // Initialize state variables
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Initialize the useNavigate hook
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if passwords match and validate password strength
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // Save registration data to localStorage
    const userData = { username, email, password };
    localStorage.setItem('user', JSON.stringify(userData));
    console.log('User registered:', userData);

    // After successful registration, navigate to Login page
    alert('Registration successful! Redirecting to Login page...');
    navigate('/');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Create an account</h2>

        <form onSubmit={handleRegister} className="register-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        <div className="register-footer">
          <p>
            Already have an account?{' '}
            <Link to="/" className="login-link">
              Login
            </Link>
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default Register;
