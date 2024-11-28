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


import React, { useState } from 'react';
import './Dashboard.css'; // Dashboard styling
import Profile from './Profile'; // Import the Profile component

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for the navigation menu
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State for the profile overlay

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`dashboard ${isProfileOpen ? 'blur-background' : ''}`}>
      <header className="dashboard-header">
        <h1 className="app-name">EVOA</h1>
        <button className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav-links-container ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {/* <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsProfileOpen(true); // Show Profile component
                }}
              >
                Profile
              </a>
            </li> */}

<li>
  <button
    className="link-button"
    onClick={() => setIsProfileOpen(true)}
  >
    Profile
  </button>
</li>

            <li><a href="#analytics">Analytics</a></li>
            <li><a href="#Settings">Settings</a></li>
          </ul>
          <div className="search-container">
            <form className="d-flex" role="search">
              <input
                className="form-control me-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="search-button" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>

      <main className="dashboard-content">
        <section className="feed">
          <h2>Feed</h2>
          <p>Here are the latest updates from your connections.</p>
        </section>
        <aside className="suggestions">
          <h2>People You May Know</h2>
          <ul>
            <li>John Doe</li>
            <li>Jane Smith</li>
            <li>Michael Brown</li>
          </ul>
        </aside>
      </main>

      {/* Profile Component (Conditionally Rendered) */}
      {isProfileOpen && (
        <Profile onClose={() => setIsProfileOpen(false)} />
      )}
    </div>
  );
};

export default Dashboard;

