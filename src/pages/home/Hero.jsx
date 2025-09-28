import React from 'react';
import bannerImg from '../../assets/banner1.jpg';

const Hero = () => {
  return (
    <section className='h-screen relative bg-cover bg-center text-white' style = {{backgroundImage: `url(${bannerImg})`}}>
      <div className='md:pt-40 pt-24 px-3 text-center space-y-7 md:w-2/3 mx-auto' style={{ textShadow: '0 0 8px rgba(0,0,0,0.6)' }}>

        <h1 className='text-3xl lg:text-6xl font-medium lg:leading-tight leading-snug'>Make Your Interior More Minimalistic & Modern</h1>
        <p className='md:text-2xl font-normal'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

      </div>
    </section>
  );
};

export default Hero;