import React from 'react';
import UserCard from './UserCard.jsx';

const UserList = ({ users, onDeleteUser }) => {
  const listStyle = {
    marginTop: '1.5rem',
  };

  const emptyStateStyle = {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    margin: '1rem 0',
  };

  return (
    <div style={listStyle}>
      {users.length > 0 ? (
        users.map((user) => <UserCard key={user.id} user={user} onDelete={onDeleteUser} />)
      ) : (
        <div style={emptyStateStyle}>
          <p>No users available. Add a new user to get started.</p>
        </div>
      )}
    </div>
  );
};

export default UserList;