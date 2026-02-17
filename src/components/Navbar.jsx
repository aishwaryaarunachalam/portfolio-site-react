import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const navLinks = ['Home', 'About', 'Resume', 'Portfolio', 'Contact'];

  return (
    <nav className="fixed w-full top-0 z-50 bg-dark/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Navigation Links */}
        <ul className="flex space-x-8">
          {navLinks.map((link) => {
            const path = link === 'Home' ? '/' : `/${link.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <li key={link}>
                <Link 
                  to={path}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link}
                  {isActive && (
                    <span className="block h-0.5 w-full bg-primary mt-1" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: Social Icons (LinkedIn & GitHub only) */}
        <div className="flex space-x-4 text-gray-400">
  <a href="https://www.linkedin.com/in/aishwaryaarunachalam/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-lg"><FaLinkedinIn /></a>
  <a href="https://github.com/aishwaryaarunachalam" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-lg"><FaGithub /></a>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
