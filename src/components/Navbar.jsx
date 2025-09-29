import React, { useState } from 'react';
import { FaBagShopping, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
// import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //hamburger menu

  const toggleMenu = ()=> {    //hamburger menu
    setIsMenuOpen(prev => !prev)
  }
  // const closeMenu = () => { 
  //   setIsMenuOpen(false);
  // };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out text-white`}>
      <nav className='container max-w-screen-2xl mx-auto flex justify-between items-center py-5 px-4'>
        <Link to="/" className='text-1.5xl font-bold'>A.H Furniture</Link >

        {/* Desktop Menu Item  */}
        <div className='flex-col md:flex-row items-center md:space-x-8 gap-8 hidden md:flex'>
          <NavLink to="/" className={({isActive}) => isActive ? "text-yellow-300 font-medium underline" : "hover:text-yellow-300"}>Home</NavLink>
          <NavLink to="/shop" className={({isActive}) => isActive ? "text-yellow-300 font-medium underline" : "hover:text-yellow-300"}>Shop</NavLink>
          <NavLink to="/aboutUs" className={({isActive}) => isActive ? "text-yellow-300 font-medium underline" : "hover:text-yellow-300"}>AboutUs</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-yellow-300 font-medium underline" : "hover:text-yellow-300"}>Contact</NavLink>
        </div>

        {/* Hamburger menu */}
        <div onClick={toggleMenu} className='md:hidden cursor-pointer text-xl hover:text-red-500'>
          <FaBars /> 
        </div>
        
        {/* Shopping Cart icon  */}
        <div className='hidden md:block cursor-pointer relative'>
          <FaBagShopping className='text-xl' />
          <sup className='absolute top-0 -right-3 bg-red-400 text-white w-5 h-5 rounded-2xl flex items-center justify-center text-xs'>0</sup>
        </div>
      </nav>

      {/* Mobile Menu Item  */}
      <div className={`fixed inset-0 flex flex-col items-center justify-center gap-8 text-lg md:hidden text-white bg-black/85 transition-all duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div onClick={toggleMenu} className="absolute top-5 right-5 text-2xl cursor-pointer">
          <FaTimes /> 
        </div>
    
        {/* Wrap all links in one clickable container */}
        <div onClick={toggleMenu} className="flex flex-col items-center gap-8">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-300 font-medium underline" : "hover:text-yellow-300"}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? "text-yellow-300 font-medium underline" : "hover:text-yellow-300"}>Shop</NavLink>
          <NavLink to="/aboutUs" className={({ isActive }) => isActive ? "text-yellow-300 font-medium underline" : "hover:text-yellow-300"}>AboutUs</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-300 font-medium underline" : "hover:text-yellow-300"}>Contact</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

