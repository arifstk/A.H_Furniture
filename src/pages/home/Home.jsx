import React from 'react';
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import Products from './../shop/Products';
import Experiences from './Experiences';

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChoose />
      <Products headline="Best Selling Products" />
      <Experiences />
    </div>
  );
};

export default Home;