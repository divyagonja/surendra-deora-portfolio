import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-black bg-opacity-95' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <Link to="/" className="text-2xl font-serif text-white font-bold">Surendra Deora</Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">Home</Link>
            <Link to="/about" className="text-white text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">About</Link>
            <Link to="/projects" className="text-white text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">Projects</Link>
            <Link to="/skills" className="text-white text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">Skills</Link>
            <Link to="/experience" className="text-white text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">Experience</Link>
            <Link to="/contact" className="text-white text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">Contact</Link>
          </div>
          
          <button onClick={toggleMenu} className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-40 transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container mx-auto h-full flex flex-col justify-center items-center">
          <button onClick={toggleMenu} className="absolute top-6 right-6 text-white text-2xl">&times;</button>
          
          <div className="flex flex-col space-y-8 items-center">
            <Link 
              to="/" 
              onClick={toggleMenu} 
              className="text-white text-4xl font-serif hover:opacity-70 transition-opacity"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={toggleMenu} 
              className="text-white text-4xl font-serif hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <Link 
              to="/projects" 
              onClick={toggleMenu} 
              className="text-white text-4xl font-serif hover:opacity-70 transition-opacity"
            >
              Projects
            </Link>
            <Link 
              to="/skills" 
              onClick={toggleMenu} 
              className="text-white text-4xl font-serif hover:opacity-70 transition-opacity"
            >
              Skills
            </Link>
            <Link 
              to="/experience" 
              onClick={toggleMenu} 
              className="text-white text-4xl font-serif hover:opacity-70 transition-opacity"
            >
              Experience
            </Link>
            <Link 
              to="/contact" 
              onClick={toggleMenu} 
              className="text-white text-4xl font-serif hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </div>
          
          <div className="mt-16 flex space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">Instagram</a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">Behance</a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">Dribbble</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
