// src/pages/Users.jsx
import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import UserForm from '../components/UserForm';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState(null);

  // Mock API functions (replace these with your actual API calls)
  const fetchUsers = async () => {
    // For testing - remove this mock data when connecting to real API
    const mockUsers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
    ];
    
    try {
      setIsLoading(true);
      
      // Comment this out and uncomment the fetch code when ready for real API
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setUsers(mockUsers);
      
      /* Uncomment for real API
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
      */
    } catch (error) {
      console.error("Error fetching users:", error);
      showNotification('error', 'Failed to load users. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const addUser = async (userData) => {
    try {
      // Comment this out and uncomment the fetch code when ready for real API
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newUser = {
        id: Date.now(), // Use a timestamp as a temporary ID
        ...userData
      };
      setUsers(prev => [...prev, newUser]);
      
      /* Uncomment for real API
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const newUser = await response.json();
      setUsers(prev => [...prev, newUser]);
      */
      
      showNotification('success', `User ${userData.name} has been added successfully!`);
    } catch (error) {
      console.error("Error adding user:", error);
      showNotification('error', 'Failed to add user. Please try again.');
      throw error;
    }
  };

  const deleteUser = async (userId) => {
    try {
      // Comment this out and uncomment the fetch code when ready for real API
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      const userToDelete = users.find(user => user.id === userId);
      setUsers(prev => prev.filter(user => user.id !== userId));
      
      /* Uncomment for real API
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      setUsers(prev => prev.filter(user => user.id !== userId));
      */
      
      showNotification('success', `User ${userToDelete.name} has been deleted.`);
    } catch (error) {
      console.error("Error deleting user:", error);
      showNotification('error', 'Failed to delete user. Please try again.');
      throw error;
    }
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>User Management</h1>
      
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      
      <div className="user-management-container">
        {/* Form section */}
        <UserForm onAddUser={addUser} />
        
        {/* User list section */}
        <div className="user-list-section">
          <h2>Current Users</h2>
          
          {isLoading ? (
            <div className="card">Loading users...</div>
          ) : users.length === 0 ? (
            <div className="card">No users found. Add some users to get started.</div>
          ) : (
            <div className="user-list">
              {users.map(user => (
                <UserCard 
                  key={user.id} 
                  user={user} 
                  onDelete={deleteUser} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;