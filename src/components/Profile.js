import React, { useState } from "react";
import "./Profile.css";

const Profile = ({ onClose }) => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div className="profile-overlay">
      <div className="profile-container">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2 className="profile-heading">Your Profile</h2>
        <div className="profile-options">
          <label htmlFor="role-select" className="role-label">
            Select yourself as:
          </label>
          <select
            id="role-select"
            className="role-dropdown"
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <option value="" disabled>
              -- Choose an option --
            </option>
            <option value="angel-investor">Angel Investor</option>
            <option value="startup-owner">Startup Owner</option>
          </select>
        </div>
        <div className="role-description">
          {selectedRole && (
            <p>
              You selected <strong>{selectedRole.replace("-", " ")}</strong>. This feature will guide you to create your page in the future.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
