
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="text-2xl font-serif font-bold">DUME</Link>
            <p className="mt-4 text-gray-400">
              A creative design studio crafting meaningful visual experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">hello@dumestudio.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">
                123 Design Street<br />
                New York, NY 10001
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Social</h4>
            <ul className="space-y-2">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Behance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} DUME. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Made with ♥ by Creative Mind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
