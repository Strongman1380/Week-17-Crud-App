// File: src/App.jsx
// Main application component that sets up routing and layout structure
// Defines the overall structure with Header, content Routes, and Footer

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Users from './pages/Users.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

/**
 * App component - Main application container
 * Sets up React Router with navigation routes and consistent layout
 */
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;// In your App.jsx or relevant parent component
import UserManagement from './components/UserManagement';

function App() {
  return (
    <div className="App">
      <UserManagement />
    </div>
  );
}

export default App;