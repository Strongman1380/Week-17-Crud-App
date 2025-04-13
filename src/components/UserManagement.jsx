// src/components/UserManagement.jsx
import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import UserForm from './UserForm';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState(null);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      // Replace with your actual API call
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to load users. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddUser = async (userData) => {
    setIsAdding(true);
    try {
      // Replace with your actual API call
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add user');
      }
      
      const newUser = await response.json();
      setUsers(prevUsers => [...prevUsers, newUser]);
      return newUser;
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    } finally {
      setIsAdding(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      // Replace with your actual API call
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  };

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div className="user-management">
      <h1>User Management</h1>
      
      <UserForm onAddUser={handleAddUser} isAdding={isAdding} />
      
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found. Add some users to get started.</p>
      ) : (
        users.map(user => (
          <UserCard 
            key={user.id} 
            user={user} 
            onDelete={handleDeleteUser} 
          />
        ))
      )}
    </div>
  );
};

export default UserManagement;