import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

const navLinks = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold font-serif text-brand-dark">
          {profile.name.split(' ')[0]}<span className="text-brand-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-brand-secondary hover:text-brand-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-brand-dark" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-brand-secondary hover:text-brand-primary"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
