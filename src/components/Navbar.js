import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">Elementum</div>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {['Home', 'Studio', 'Services', 'Contact', "FAQ's"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="navbar__hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
};

export default Navbar;
