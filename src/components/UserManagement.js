// File: src/components/UserManagement.js
// User Management component that combines user listing and form functionality

import React, { useState, useEffect } from 'react';
import { api } from '../utils/api.js';
import UserList from './UserList.jsx';
import UserForm from './UserForm.jsx';

/**
 * UserManagement component - Handles all user management functionality
 * Provides a centralized component for user operations
 */
const UserManagement = () => {
  // State for users data
  const [users, setUsers] = useState([]);
  // State for loading indicators
  const [loading, setLoading] = useState(false);
  // State for error and success messages
  const [message, setMessage] = useState({ text: '', type: '' });

  /**
   * Fetches users from the API
   */
  const loadUsers = async () => {
    setLoading(true);
    try {
      const res = await api.get('/users');
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to load users:', error);
      setMessage({ text: 'Failed to load users. Please try again.', type: 'error' });
      setLoading(false);
    }
  };

  /**
   * Handles adding a new user
   * @param {Object} userData - The user data to be added
   */
  const handleAddUser = async (userData) => {
    setLoading(true);
    try {
      const res = await api.post('/users', userData);
      setUsers([...users, res.data]);
      setMessage({ text: 'User added successfully!', type: 'success' });
      setLoading(false);
    } catch (error) {
      console.error('Failed to add user:', error);
      setMessage({ text: 'Failed to add user. Please try again.', type: 'error' });
      setLoading(false);
    }
  };

  /**
   * Handles deleting a user
   * @param {string} userId - The ID of the user to delete
   */
  const handleDeleteUser = async (userId) => {
    setLoading(true);
    try {
      await api.delete(`/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
      setMessage({ text: 'User deleted successfully!', type: 'success' });
      setLoading(false);
    } catch (error) {
      console.error('Failed to delete user:', error);
      setMessage({ text: 'Failed to delete user. Please try again.', type: 'error' });
      setLoading(false);
    }
  };

  // Clear message after 5 seconds
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: '', type: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // Load users when component mounts
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="user-management-container">
      {/* Notification message */}
      {message.text && (
        <div className={`notification ${message.type}`}>
          {message.text}
        </div>
      )}
      
      {/* User form section */}
      <div className="user-form-section">
        <h2>Add New User</h2>
        <UserForm onSubmit={handleAddUser} />
      </div>
      
      {/* User list section */}
      <div className="user-list-section">
        <h2>Current Users</h2>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <UserList users={users} onDeleteUser={handleDeleteUser} />
        )}
      </div>
    </div>
  );
};

export default UserManagement;