// src/components/UserCard.jsx
import React, { useState } from 'react';

const UserCard = ({ user, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  
  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
      setIsDeleting(true);
      setError(null);
      try {
        await onDelete(user.id);
      } catch (error) {
        setError(error.message || 'Failed to delete user');
        setIsDeleting(false);
      }
    }
  };
  
  return (
    <div className="card">
      {error && <div className="notification error">{error}</div>}
      
      <div style={{ opacity: isDeleting ? 0.5 : 1 }}>
        <h3>{user.name}</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        
        <button 
          onClick={handleDelete} 
          className="btn-primary"
          style={{ backgroundColor: 'var(--error-color)' }}
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting...' : 'Delete User'}
        </button>
      </div>
    </div>
  );
};

export default UserCard;