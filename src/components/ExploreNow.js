import React from "react";
import "./ExploreNow.css";

const ExploreNow = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="LOGO">EVO-A</div>
        <div className="LOGO">EXPLORE PAGE</div>
        <input type="search" placeholder="Search..." />
      </div>

      {/* Categories */}
      <div className="categories-container">
        <button className="arrow left-arrow">&#9664;</button>
        <div className="categories">
          <div className="category">Healthcare</div>
          <div className="category">Ecommerce</div>
          <div className="category">Educational technology</div>
          <div className="category">Fintech</div>
          <div className="category">AI</div>
          <div className="category">Business communication</div>
          <div className="category">Logistics</div>
          <div className="category">Renewable energy</div>
          <div className="category">Cybersecurity</div>
          <div className="category">Construction</div>
          <div className="category">Entertainment</div>
          <div className="category">Finance</div>
          <div className="category">Technology</div>
          <div className="category">Blockchain</div>
          <div className="category">Food technology</div>
          <div className="category">Hospitality</div>
          <div className="category">Services</div>
          <div className="category">Streaming services</div>
          <div className="category">Telehealth</div>
          <div className="category">Travel</div>
          <div className="category">Agriculture</div>
          <div className="category">Big data</div>
          <div className="category">Consumer retail</div>
          <div className="category">Virtual reality</div>
        </div>
        <button className="arrow right-arrow">&#9654;</button>
      </div>

      {/* Video Grid */}
      <div className="video-grid">
        {/* Video Cards */}
        {[...Array(12)].map((_, index) => (
          <div key={index} className="video-card">
            <div className="video-thumbnail">
              <img src="https://via.placeholder.com/300x160" alt="Video Thumbnail" />
            </div>
            <div className="video-details">
              <div className="video-title">STARTUP PITCH {index + 1}</div>
              <div className="video-channel">ABC@{100 + index}</div>
              <div className="video-stats">{Math.floor(Math.random() * 1000)}K views • 1 day ago</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreNow;
