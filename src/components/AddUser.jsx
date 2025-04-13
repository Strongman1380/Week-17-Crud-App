/Users/brandonhinrichs/Local Repositories/Aspire 16 App/src/components/AddUserForm.jsx
// AddUserForm component - Provides a form to add new users

import React, { useState } from 'react';

/**
 * A form component for adding new users.
 * Takes an onAddUser function prop to handle the submission logic.
 *
 * @param {object} props - Component props
 * @param {function} props.onAddUser - Function to call when the form is submitted with user data.
 */
const AddUserForm = ({ onAddUser }) => {
  // State to hold the form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // Add more state variables for other user fields as needed (e.g., role, password)

  /**
   * Handles the form submission event.
   * Prevents default form behavior, gathers data, calls the onAddUser prop,
   * and clears the form fields.
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event
   */
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    // Basic validation (optional but recommended)
    if (!name || !email) {
      alert('Please fill in both name and email.');
      return;
    }

    // Create a user data object from the current state
    const newUser = {
      name,
      email,
      // Add other fields here
    };

    // Call the function passed via props to handle adding the user
    // This function should contain the logic to interact with your backend/API
    onAddUser(newUser);

    // Clear the form fields after successful submission
    setName('');
    setEmail('');
  };

  // Basic styling for the form elements (can be moved to CSS/Styled Components)
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem', // Spacing between elements
    padding: '1.5rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '400px', // Limit form width
    margin: '1rem 0', // Add some margin
  };

  const inputStyle = {
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const labelStyle = {
    marginBottom: '-0.5rem', // Adjust spacing between label and input
    fontWeight: 'bold',
  };

   const buttonStyle = {
    padding: '0.75rem',
    backgroundColor: '#0077b6', // Use brand color
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  };


  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Add New User</h2>
      <div>
        <label htmlFor="name" style={labelStyle}>Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required // HTML5 validation
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="email" style={labelStyle}>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required // HTML5 validation
          style={inputStyle}
        />
      </div>
      {/* Add more input fields here as needed */}
      <button type="submit" style={buttonStyle}>Add User</button>
    </form>
  );
};

export default AddUserForm;