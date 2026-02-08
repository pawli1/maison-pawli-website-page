
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'The Process', id: 'process' },
    { name: 'Packages', id: 'packages' },
    { name: 'Concierge', id: 'concierge' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col text-left">
          <span className={`font-serif text-2xl font-bold tracking-widest ${isScrolled ? 'text-luxury-dark' : 'text-white'}`}>
            MAISON PAWLI
          </span>
          <span className={`text-[10px] tracking-[0.3em] font-light ${isScrolled ? 'text-gold-600' : 'text-gold-400'}`}>
            BOUTIQUE REALTY
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`text-sm font-medium tracking-wide hover:text-gold-500 transition-colors ${
                isScrolled ? 'text-luxury-dark' : 'text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-sm text-sm font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Book Consultation
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-luxury-dark' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-luxury-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 shadow-xl p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-luxury-dark text-lg font-medium text-left"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="bg-gold-500 text-white w-full py-4 rounded-sm font-bold text-center"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
