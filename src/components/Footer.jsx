// Footer component - Displays copyright information and organization description
// Appears at the bottom of all pages

import React from 'react';

/**
 * Footer component with copyright and organization information
 * Dynamically updates the year to always show current year
 */
const Footer = () => {
  return (
    <footer style={{ 
      textAlign: 'center', 
      padding: '1rem 0', 
      backgroundColor: '#f1f1f1', 
      color: '#555' 
    }}>
      <p>
        &copy; {new Date().getFullYear()} Aspire Impact Network. 
        Bridging social impact and technology to uplift communities and organizations.
      </p>
      <small>Serving Nebraska with compassionate social services and digital innovation.</small>
    </footer>
  );
};

export default Footer;