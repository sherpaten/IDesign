'use client';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const link of links) {
        const el = document.getElementById(link.target);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(link.target);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 z-40 transition-colors duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Identity / Image Logo Layout Vector */}
        <div onClick={() => handleScroll('home')} className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-102 transition-transform shadow-sm">
            <img 
              src="/logo.jpg" 
              alt="iDesign Studio Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-black tracking-widest text-slate-900 font-sans uppercase">
            IDESIGN <span className="text-blue-600">STUDIO</span>
          </span>
        </div>

        {/* Desktop Links Matrix */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.target}
              onClick={() => handleScroll(link.target)}
              className={`font-mono text-xs uppercase tracking-widest font-bold transition-all duration-200 cursor-pointer ${
                activeSection === link.target 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Action Drawer Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-current rounded transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full bg-current rounded transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-current rounded transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Vertical Dropdown Menu Drawer Section */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 flex flex-col items-center py-6 space-y-4 md:hidden shadow-lg z-50">
          {links.map((link) => (
            <button
              key={link.target}
              onClick={() => handleScroll(link.target)}
              className={`text-sm font-mono tracking-wider transition-colors uppercase font-bold py-2 ${
                activeSection === link.target ? 'text-blue-600' : 'text-slate-600'
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
