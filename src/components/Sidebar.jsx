import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={{ width: '200px', padding: '1rem', background: '#eee' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/users">User Management</Link></li>
          <li><Link to="/digital-services">Services</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;