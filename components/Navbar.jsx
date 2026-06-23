'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
      const offset = 80; 
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsOpen(false); // Auto-close drop-down when navigation links are clicked
    }
  };

  return (
    <header className="nav-header relative">
      <div className="nav-container flex items-center justify-between w-full px-6 py-4">
        
        {/* Brand Logo Identity */}
        <button onClick={() => handleScroll('home')} className="nav-logo-wrapper">
          <img src="/logo.jpeg" alt="iDesign Logo" className="nav-logo-img" />
          <span className="nav-logo-text">iDESIGN <span className="nav-logo-span">STUDIO</span></span>
        </button>

        {/* Desktop Links (Hidden on mobile via globals.css .nav-links-wrapper rule changes) */}
        <nav className="nav-links-wrapper hidden md:flex">
          {links.map((link) => (
            <button 
              key={link.target} 
              onClick={() => handleScroll(link.target)} 
              className={`nav-btn ${activeSection === link.target ? 'nav-btn-active' : 'nav-btn-inactive'}`}
            >
              {link.name}
              {activeSection === link.target && <div className="nav-indicator" />}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger Button (Visible only on mobile viewports) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden block text-white focus:outline-none z-50 p-2 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Vertical Dropdown Menu Drawer Section */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#030712]/95 border-b border-blue-950/40 backdrop-blur-md flex flex-col items-center py-6 space-y-4 md:hidden z-50 transition-all duration-300 ease-in-out">
          {links.map((link) => (
            <button
              key={link.target}
              onClick={() => handleScroll(link.target)}
              className={`text-lg font-mono tracking-wider transition-colors duration-200 uppercase ${
                activeSection === link.target ? 'text-blue-400' : 'text-slate-400'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
