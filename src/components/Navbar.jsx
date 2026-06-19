import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact', href: '#impact' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Donate', href: '#donate' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-3 backdrop-blur-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-sky-500 to-emerald-500 p-2 rounded-xl text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <Heart className="h-6 w-6 fill-current" />
            </div>
            <span className={`font-extrabold text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-800' : 'text-white'}`}>
              Bright Future <span className="text-emerald-500">Foundation</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  scrolled
                    ? 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#donate"
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 text-sm"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg focus:outline-none transition-colors ${
                scrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[60px] bg-white border-t border-slate-100 shadow-xl transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 pointer-events-none opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <a
              href="#donate"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
