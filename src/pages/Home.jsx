// File: src/pages/Home.jsx
// Home page component - Landing page for the application
// Displays organization overview and services offered

import React from 'react';

/**
 * Home component - Main landing page
 * Presents the organization's mission and services in two main categories:
 * 1. Community Services - Social support programs
 * 2. Digital Solutions - Technology and business services
 */
const Home = () => {
  return (
    <section className="container">
      {/* Hero section with main messaging */}
      <div className="hero">
        <h1>Aspire Impact Network</h1>
        <h2>Empowering Communities. Elevating Brands.</h2>
        <p>
          A dual-service organization dedicated to supporting individuals, families, 
          and small businesses across Nebraska through compassionate social services 
          and innovative digital solutions.
        </p>
      </div>
      
      {/* Services overview section */}
      <div className="services-overview">
        {/* Community services section */}
        <div className="community-services">
          <h3>Community Services</h3>
          <ul>
            <li>Trauma-informed social support</li>
            <li>Case management</li>
            <li>Reentry services</li>
            <li>Family wraparound programming</li>
          </ul>
        </div>
        
        {/* Digital solutions section */}
        <div className="digital-solutions">
          <h3>Digital Solutions</h3>
          <ul>
            <li>Professional branding</li>
            <li>Web development</li>
            <li>Marketing support</li>
            <li>Business automation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;