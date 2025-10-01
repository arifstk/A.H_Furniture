import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className='bg-[#fafafa] mt-10 pt-10 pb-5 px-3 text-gray-700 mx-auto'>
      <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8'>
        <div className='md:col-span-2'>
          <h2 className='text-2xl font-bold mb-4'><Link to="/">A.H Furniture</Link></h2>
          <p className='mr-12'>The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.</p>
        </div>
          {/* Services */}
        <div>
          <h2 className='text-1xl font-bold mb-4'>Services</h2>
          <ul>
            <li><Link to="/" className='hover:text-red-500'>Email Marketing</Link></li>
            <li><Link to="/" className='hover:text-red-500'>Campaign</Link></li>
            <li><Link to="/" className='hover:text-red-500'>Branding</Link></li>
          </ul>
        </div>
          {/* Furniture  */}
        <div>
          <h2 className='text-1xl font-bold mb-4'>Furniture</h2>
          <ul>
            <li><Link to="/" className='hover:text-red-500'>Bed</Link></li>
            <li><Link to="/" className='hover:text-red-500'>Chair</Link></li>
            <li><Link to="/" className='hover:text-red-500'>All</Link></li>
          </ul>
        </div>
          {/* Follow us  */}
        <div>
          <h2 className='text-1xl font-bold mb-4'>Follow Us</h2>
          <ul>
            <li><Link to="/" className='hover:text-red-500 flex items-center gap-1'>
              <FaFacebook /> <span>Facebook</span> </Link></li>
            <li><Link to="/" className='hover:text-red-500 flex items-center gap-1'>
              <FaXTwitter /> <span>Twitter</span> </Link></li>
            <li><Link to="/" className='hover:text-red-500 flex items-center gap-1'>
              <PiInstagramLogoBold /> <span>Instagram</span> </Link></li>
          </ul>
        </div>
      </div>

        {/* Copyright section  */}
      <div className='mt-10 container flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center text-base'>
        <p>&copy; {new Date().getFullYear()} A.H Furniture</p>
        <p>Developed by <span className='text-base text-green-600 font-light italic'>Arif Hossain</span></p>
      </div>
    </footer>
  );
};

export default Footer;