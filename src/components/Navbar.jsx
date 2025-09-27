import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className='nav-link'>Home</NavLink>
      <NavLink to="/shop" className='nav-link'>Shop</NavLink>
      <NavLink to="/aboutUs" className='nav-link'>AboutUs</NavLink>
      <NavLink to="/contact" className='nav-link'>Contact</NavLink>
    </nav>
  );
};

export default Navbar;