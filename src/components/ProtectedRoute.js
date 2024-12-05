// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   return user ? children : <Navigate to="/" />;
// };

// export default ProtectedRoute;



import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // If user is not logged in, redirect to the login page
  if (!user) {
    return <Navigate to="/" />;
  }

  // Pass the user data to the child components
  return React.cloneElement(children, { user });
};

export default ProtectedRoute;
