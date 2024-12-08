// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';
// import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
// import Splash from './components/Splash';
// import './App.css';

// const App = () => {
  
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


// After adding Splash Component:

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ExploreNow from "./components/ExploreNow"; // Import ExploreNow component
import ProtectedRoute from "./components/ProtectedRoute";
import Splash from "./components/Splash"; // Import Splash component
import "./App.css";

const App = () => {
  const [showSplash, setShowSplash] = useState(true); // State to control splash visibility

  useEffect(() => {
    // Hide splash screen after 1 second
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  if (showSplash) {
    return <Splash />; // Render the splash screen
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" 
          element={<ProtectedRoute>
            <Login />
              </ProtectedRoute>} />
          <Route path="/register" 
          element={<ProtectedRoute>
            <Register />
            </ProtectedRoute>} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/explore-now"
            element={
              <ProtectedRoute>
                <ExploreNow />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
