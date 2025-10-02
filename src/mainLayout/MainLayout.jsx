import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './../pages/home/Home';
import Shop from './../pages/shop/Shop';
import AboutUs from './../pages/about/AboutUs';
import Contact from './../pages/contact/Contact';
import Error from './../pages/Error';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartProvider } from '../context/CartContext';

const MainLayout = () => {
  return (
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
            <Route pate='/login' element={<Login />} />
            <Route pate='/register' element={<Register />} />

            {/* if page not found  */}
            <Route path='*' element={<Error />} />
          </Routes>

          <Footer /> 
        </BrowserRouter>
      </CartProvider>
  );
};

export default MainLayout;