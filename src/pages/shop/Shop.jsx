import React from 'react';
import bannerImg from '../../assets/banner-shop.jpg';
import Products from './Products';

const Shop = () => {
  return (
    <section className='mx-auto'>
      <div className='w-full h-[400px] relative bg-cover bg-center text-white flex justify-center items-center' style = {{backgroundImage: `url(${bannerImg})`}}>
      
        <h1 className='text-4xl text-white px-3 mx-auto text-center lg:text-6xl font-medium ' style={{ textShadow: '0 0 8px rgba(0,0,0,0.6)' }}>Purchase Our Products</h1>
      </div>
      <Products headline="What's Your Choice" />
    </section>
  );
};

export default Shop;