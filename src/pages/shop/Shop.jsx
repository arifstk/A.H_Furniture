import React from 'react';
import bannerImg from '../../assets/banner-shop.jpg';

const Shop = () => {
  return (
    <section className='min-h-screen mx-auto'>
      <div className='w-full h-[400px] relative bg-cover bg-center text-white flex justify-center items-center' style = {{backgroundImage: `url(${bannerImg})`}}>

      {/* Black Shadow Overlay */}
      {/* <div className='absolute z-39 inset-0 bg-black/40 shadow-[inset_0_0_80px_rgba(0,0,0,0.7)]'></div> */}
      
        <h1 className='text-4xl text-white px-3 mx-auto text-center lg:text-6xl font-medium lg:leading-tight leading-snug' style={{ textShadow: '0 0 8px rgba(0,0,0,0.6)' }}>Purchase Our Products</h1>
      </div>
    </section>
  );
};

export default Shop;