import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-10">
      <div className="flex justify-around py-3 items-center backdrop-blur-sm bg-white/70" ref={navbarRef}>
        <div>
          <img src={logo} width={70} height={60} alt="Logo" />
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-6 uppercase font-medium text-gray-700 text-sm">
            <li className='nav-item'><a href="#Home" className='nav-link'>Home</a></li>
            <li className='nav-item'><a href="#About" className='nav-link'>About</a></li>
            <li className='nav-item'><a href="#Skills" className='nav-link'>Skills</a></li>
            <li className='nav-item'><a href="#Projects" className='nav-link'>Projects</a></li>
            <li className='nav-item'><a href="#Contacts" className='nav-link'>Contact</a></li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={`md:hidden bg-white/70 backdrop-blur-sm transition-all duration-500 transform ${isOpen ? 'nav-open' : 'nav-close'}`}>
        <ul className="flex flex-col gap-6 py-4 uppercase font-medium text-gray-700 text-sm items-center">
          <li className='hover:text-navy'><a href="#Home" onClick={toggleMenu}>Home</a></li>
          <li className='hover:text-navy'><a href="#About" onClick={toggleMenu}>About</a></li>
          <li className='hover:text-navy'><a href="#Skills" onClick={toggleMenu}>Skills</a></li>
          <li className='hover:text-navy'><a href="#Projects" onClick={toggleMenu}>Projects</a></li>
          <li className='hover:text-navy'><a href="#Contacts" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
