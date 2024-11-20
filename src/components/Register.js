// import React, { useState } from 'react'

// const Register = () => {

//   const[input, setInput] = useState({
//     name : "",
//     email : "",
//     password : "",
//   })

//   return (
//     <div>
//       Register
//     </div>
//   )
// }

// export default Register;


// Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const handleRegister = () => {
    if (input.name && input.email && input.password) {
      // Save user details to localStorage
      localStorage.setItem('user', JSON.stringify(input));
      console.log('Registered:', input);
      navigate('/login'); // Redirect to login page after registration
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center text-info">Register</h3>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name" className="text-info">Username:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={input.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>

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

        <button type="button" onClick={handleRegister} className="btn btn-info btn-md">
          Register
        </button>
        <p>Already User?</p>
        <button className="btn btn-info btn-md" >Login</button>
      </form>
    </div>
  );
};

export default Register;
