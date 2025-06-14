
import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from '../types';
import { WHATSAPP_LINK } from '../constants';

interface NavbarProps {
  navLinks: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ease-in-out font-poppins ${
          isScrolled 
            ? 'bg-white shadow-soft-lg py-2.5' 
            : 'bg-transparent py-4'
        }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
          <a href="#hero" className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-coffee-dark' : 'text-white'}`}>
            CV. Dampit Coffee Sejahtera
          </a>
          
          {/* Desktop Menu - Hidden on lg and smaller */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className={`text-sm hover:text-coffee-accent transition-colors duration-300 ${isScrolled ? 'text-coffee-dark' : 'text-gray-100'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-whatsapp text-white px-5 py-2 rounded-md hover:bg-green-700 transition-all duration-300 text-xs font-medium shadow-sm hover:shadow-md transform hover:scale-105"
            >
              Konsultasi Sekarang
            </a>
          </div>

          {/* Mobile Menu Button - Visible on lg and smaller */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className={`focus:outline-none p-1.5 rounded-md transition-colors duration-300 z-[70] relative ${
                isScrolled || isOpen ? 'text-coffee-dark hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu-sidebar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop for Mobile Sidebar - Hidden on lg and larger */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[55] lg:hidden" 
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Menu Sidebar - Hidden on lg and larger */}
      <div 
        id="mobile-menu-sidebar"
        className={`lg:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs sm:max-w-[280px] bg-white shadow-2xl z-[60] 
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-heading"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-5 border-b border-gray-200">
             <h2 id="mobile-menu-heading" className="text-lg font-poppins font-semibold text-coffee-dark">Menu</h2>
          </div>
          <nav className="flex-grow p-5 space-y-2.5 overflow-y-auto">
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className="block text-coffee-dark hover:text-coffee-accent transition-colors duration-200 py-2 text-base rounded-md hover:bg-gray-100 px-2.5"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="p-5 border-t border-gray-200">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-brand-whatsapp text-white text-center px-5 py-3 rounded-md hover:bg-green-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg text-sm"
              onClick={toggleMenu}
            >
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
