import React from 'react';
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import Products from './../shop/Products';

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChoose />
      <Products headline="Best Selling Products" />
    </div>
  );
};

export default Home;