// File: src/main.jsx
// Main entry point for the React application
// Renders the App component into the DOM root element

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/main.css'; // Import main CSS styles

// Create a React root and render the App component within StrictMode for better development experience
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);