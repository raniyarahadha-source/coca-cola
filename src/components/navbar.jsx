import React from 'react';
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          {/* Coca-Cola Logo placeholder */}
          <span className="brand-title">The <span className="main-logo">Coca-Cola</span> Company</span>
        </div>
        <ul className="nav-links">
          <li><a href="#brands">Brands</a></li>
          <li><a href="#discover">Discover <span className="arrow">›</span></a></li>
          <li><a href="#impact">Impact</a></li>
          <li><a href="#shop">Shop <span className="arrow">›</span></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;