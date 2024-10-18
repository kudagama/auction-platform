import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  // Initial user data
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    createdAt: '2024-01-15',
    auctionsParticipated: 5,
    bidsPlaced: 10,
  });

  // State for editing mode
  const [isEditing, setIsEditing] = useState(false);

  // Temporary state for form values
  const [formData, setFormData] = useState(user);

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Save changes and exit edit mode
  const handleSave = () => {
    setUser(formData); // Save the updated user data
    setIsEditing(false); // Exit editing mode
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <div className="profile-card">
        <div className="profile-header">
          {isEditing ? (
            <>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="input-field"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="input-field"
              />
            </>
          ) : (
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
          )}
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-field"
            />
          ) : (
            <p className="email">{user.email}</p>
          )}
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <span className="detail-label">Account Created:</span>
            <span className="detail-value">{user.createdAt}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Auctions Participated:</span>
            <span className="detail-value">{user.auctionsParticipated}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Bids Placed:</span>
            <span className="detail-value">{user.bidsPlaced}</span>
          </div>
        </div>
      </div>

      {isEditing ? (
        <div className="action-buttons">
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={toggleEditMode}>Cancel</button>
        </div>
      ) : (
        <button className="edit-profile-btn" onClick={toggleEditMode}>Edit Profile</button>
      )}
    </div>
  );
};

export default UserProfile;
