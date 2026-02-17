import React from 'react';
import { FaGithub, FaLinkedinIn, FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-black/20 text-center border-t border-white/5 mt-auto">
      <div className="flex justify-center gap-4 mb-4 text-gray-400">
        <a 
          href="https://www.linkedin.com/in/aishwaryaarunachalam/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors p-2 border border-white/10 rounded-full"
        >
          <FaLinkedinIn />
        </a>
        <a 
          href="https://github.com/aishwaryaarunachalam" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors p-2 border border-white/10 rounded-full"
        >
          <FaGithub />
        </a>
      </div>
      
      <p className="text-gray-500 text-sm mb-2">
        &copy; Copyright {currentYear} <strong className="text-white">Aishwarya Arunachalam</strong>. All Rights Reserved
      </p>
      
      <p className="text-gray-600 text-xs flex items-center justify-center gap-1">
        Coded by <span className="text-primary font-medium">Aishwarya Arunachalam</span> with 
        <span className="text-red-500">❤</span> +
        <span className="flex items-center gap-1 text-sky-400"><FaReact className="animate-spin-slow" /> React</span>
        <span>+</span>
        <span className="flex items-center gap-1 text-purple-400"><SiVite /> Vite</span>
      </p>
    </footer>
  );
};

export default Footer;
