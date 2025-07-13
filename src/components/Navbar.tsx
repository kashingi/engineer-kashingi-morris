import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationLinks } from '../constants/data';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % navigationLinks.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isMenuOpen]);

  const visibleLinks = isMenuOpen ? navigationLinks.slice(currentIndex, currentIndex + 3) : [];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className={`text-xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-blue-600' : 'text-white'
          }`}
        >
          Eng <span className="text-blue-500">Morris</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.path} 
                className={`transition-colors duration-300 hover:text-blue-500 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md p-4 animated fadeIn">
            <div className="flex flex-wrap gap-4">
              {visibleLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.path} 
                  className="text-gray-800 hover:text-blue-500 transition-colors duration-300 flex-grow basis-auto"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;