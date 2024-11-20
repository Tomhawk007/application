// src/components/Register.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Register.css'; // Import custom styles

const Register = () => {
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

    // Log the registration data for now (you can replace this with an actual registration function)
    console.log('Registering with:', { username, email, password });

    // After successful registration, navigate to the Login page
    // You can replace this with actual registration logic
    // setTimeout(() => {
    //   // Simulate a successful registration by redirecting to the Login page
    //   navigate('/');  // Redirect to Login page after successful registration
    // }, 1000); // Optional: delay for user feedback (you can remove this if you want immediate redirection)
    setTimeout(() => {
      alert('Registration successful! Redirecting to Login page...');
      navigate('/'); // Redirect to Login page
    }, 1000);
    
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
