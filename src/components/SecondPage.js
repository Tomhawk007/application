// import Navbar from './Navbar';
// import TextForm from './TextForm';
// import Login from './Login';

// function SecondPage(){
//     return(
  
//         <div>
//           <Login/>
//           <Navbar title="Ushereel" profile="Profile" 
//           savedPosts="Saved Posts" analytics="Analytics" 
//           setting="Settings" subs="Subscription"/>

//           <div className='container'>
//           <TextForm heading="Post your Startup reels here"/>
//           </div>
//         </div>
//     )
// }
// export default SecondPage;


// SecondPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import TextForm from './TextForm';

function SecondPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in by checking localStorage for user data
    const user = JSON.parse(localStorage.getItem('user'));
    
    // If no user is found in localStorage, redirect to login page
    if (!user) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [navigate]);

  return (
    <div>
      <Navbar
        title="Ushereel"
        profile="Profile"
        savedPosts="Saved Posts"
        analytics="Analytics"
        setting="Settings"
        subs="Subscription"
      />

      <div className="container">
        <TextForm heading="Post your Startup reels here" />
      </div>
    </div>
  );
}

export default SecondPage;

