// Header component - Displays the site navigation and branding
// Provides links to different sections of the application

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Header component with navigation links
 * Contains the organization logo, tagline, and main navigation menu
 */
const Header = () => {
  return (
    <header style={{ 
      backgroundColor: '#0077b6', // Primary brand color
      padding: '1rem', 
      color: '#fff', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    }}>
      <div className="logo">
        <h1 style={{ margin: 0 }}>Aspire Impact Network</h1>
        <small style={{ color: '#e0e0e0' }}>Empowering Communities. Elevating Brands.</small>
      </div>
      <nav style={{ marginTop: '0.5rem' }}>
        <Link to="/" style={{ color: '#fff', marginRight: '1rem', textDecoration: 'none' }}>Home</Link>
        <Link to="/users" style={{ color: '#fff', marginRight: '1rem', textDecoration: 'none' }}>Community Management</Link>
      </nav>
    </header>
  );
};

export default Header;