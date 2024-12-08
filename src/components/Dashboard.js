// import React, {useState} from 'react';
// import './Dashboard.css'; // Create a CSS file for styling

// const Dashboard = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className="dashboard">
//       <header className="dashboard-header">
//         <h1 className="app-name">EVOA</h1>
//         <button className="hamburger-menu" onClick={toggleMenu}>
//           ☰
//         </button>
//         <nav className={`nav-links-container ${menuOpen ? 'open' : ''}`}>
//           <ul className="nav-links">
//             <li><a href="#Profile">Profile</a></li>
//             <li><a href="#analytics">Analytics</a></li>
//             {/* <li><a href="#jobs">Jobs</a></li> */}
//             <li><a href="#Settings">Settings</a></li>
//             {/* <li><a href="#notifications">Notifications</a></li> */}
//             <div class="container-fluid">
//               <form class="d-flex" role="search">
//               <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
//               <button className="search-button" type="submit">Search</button>
//               </form>
//             </div>
//           </ul>
//         </nav>
//       </header>
//       <main className="dashboard-content">
//         <section className="feed">
//           <h2>Feed</h2>
//           <p>Here are the latest updates from your connections.</p>
//           {/* Add posts or interactive feed here */}
//         </section>
//         <aside className="suggestions">
//           <h2>People You May Know</h2>
//           <ul>
//             <li>John Doe</li>
//             <li>Jane Smith</li>
//             <li>Michael Brown</li>
//           </ul>
//           {/* Add functionality to connect */}
//         </aside>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;



// Adding Profile page


// import React, { useState } from 'react';
// import './Dashboard.css'; // Dashboard styling
// import Profile from './Profile'; // Import the Profile component

// const Dashboard = () => {
//   const [menuOpen, setMenuOpen] = useState(false); // State for the navigation menu
//   const [isProfileOpen, setIsProfileOpen] = useState(false); // State for the profile overlay

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className={`dashboard ${isProfileOpen ? 'blur-background' : ''}`}>
//       <header className="dashboard-header">
//         <h1 className="app-name">EVO-A</h1>
//         <button className="hamburger-menu" onClick={toggleMenu}>
//           ☰
//         </button>
//         <nav className={`nav-links-container ${menuOpen ? 'open' : ''}`}>
//           <ul className="nav-links">
//             {/* <li>
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setIsProfileOpen(true); // Show Profile component
//                 }}
//               >
//                 Profile
//               </a>
//             </li> */}

//             <li>
//             <button
//             className="link-button"
//             onClick={() => setIsProfileOpen(true)}
//             >
//             Profile
//             </button>
//             </li>

//             <li><a href="#analytics">Analytics</a></li>
//             <li><a href="#Settings">Settings</a></li>
//             <li><a href="#Menu">Menu</a></li>

//           </ul>
//           <div className="search-container">
//             <form className="d-flex" role="search">
//               <input
//                 className="form-control me-1"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="search-button" type="submit">Search</button>
//             </form>
//           </div>
//         </nav>
//       </header>

//       <main className="dashboard-content">
//         <section className="feed">
//           <h2>Feed</h2>
//           <p>Here are the latest updates from your connections.</p>
//         </section>
//         <aside className="suggestions">
//           <h2>Recommended for you</h2>
//           <ul>
//             <li>Video-1</li>
//             <li>Video-2</li>
//             <li>Video-3</li>
//           </ul>
//         </aside>
//       </main>

//       {/* Profile Component (Conditionally Rendered) */}
//       {isProfileOpen && (
//         <Profile onClose={() => setIsProfileOpen(false)} />
//       )}
//     </div>
//   );
// };

// export default Dashboard;



// ADDIND DEEPU EXPLORE PAGE



import React from "react";
import { useNavigate} from "react-router-dom";
import "./Dashboard.css"; // Import the CSS for styling

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div>
      <header>
        <div className="logo">EVO-A</div>
        <nav>
        <nav>
  <button onClick={() => console.log("Go to Home")}>Home</button>
  <button onClick={() => console.log("Go to Startups")}>Startups</button>
  <button onClick={() => console.log("Go to Events")}>Events</button>
</nav>

        </nav>
      </header>

      <div className="hero">
        <h1>Discover Startups That Shape Tomorrow</h1>
        <p>
          Explore the best startups, connect with innovators, and dive into the
          future of technology and green solutions.
        </p>
        {/* Navigate to ExploreNow component when button is clicked */}
        <button onClick={() => navigate("/explore-now")}>Explore Now</button>
      </div>

      <div className="featured-section">
        <h2>Featured Startups</h2>
        <div className="featured-grid">
          <div className="card">
            <img src="https://via.placeholder.com/250" alt="Startup 1" />
            <h3>Startup 1</h3>
            <p>Innovating for a greener planet.</p>
            <button>Learn More</button>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/250" alt="Startup 2" />
            <h3>Startup 2</h3>
            <p>Revolutionizing tech innovations.</p>
            <button>Learn More</button>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/250" alt="Startup 3" />
            <h3>Startup 3</h3>
            <p>Pioneering the future of AI.</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Platform Stats</h2>
        <div className="stats">
          <div className="stat">50+ Startups</div>
          <div className="stat">100+ Investors</div>
          <div className="stat">10k+ Views</div>
        </div>
      </div>

      <footer>
        &copy; 2024 Explore. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
