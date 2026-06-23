
'use client';
import { useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const links = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Services', target: 'services' },
    { name: 'Team', target: 'team' },
    { name: 'Contact', target: 'contact' },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offsets the fixed header height smoothly
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <header className="nav-header">
      <div className="nav-container">
        <button onClick={() => handleScroll('home')} className="nav-logo-wrapper">
          <img src="/logo.jpeg" alt="iDesign Logo" className="nav-logo-img" />
          <span className="nav-logo-text">iDESIGN <span className="nav-logo-span">STUDIO</span></span>
        </button>
        <nav className="nav-links-wrapper">
          {links.map((link) => (
            <button key={link.target} onClick={() => handleScroll(link.target)} className={`nav-btn ${activeSection === link.target ? 'nav-btn-active' : 'nav-btn-inactive'}`}>
              {link.name}
              {activeSection === link.target && <div className="nav-indicator" />}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
