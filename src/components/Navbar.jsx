import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className='container mx-auto flex justify-between items-center py-5 px-4'>
        <Link to="/" className='text-1.5xl font-bold'>A.H Furniture</Link >
        <div className='flex flex-col md:flex-row items-center md:space-x-8 gap-8'>
          <NavLink to="/" className={({isActive}) => isActive ? "text-red-600 font-medium underline" : "hover:text-red-500"}>Home</NavLink>
          <NavLink to="/shop" className={({isActive}) => isActive ? "text-red-600 font-medium underline" : "hover:text-red-500"}>Shop</NavLink>
          <NavLink to="/aboutUs" className={({isActive}) => isActive ? "text-red-600 font-medium underline" : "hover:text-red-500"}>AboutUs</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-red-600 font-medium underline" : "hover:text-red-500"}>Contact</NavLink>
        </div>
        <div>Cart</div>
      </nav>
    </header>
  );
};

export default Navbar;