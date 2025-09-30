import React from 'react';
import bannerImg from '../../assets/banner1.jpg';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='h-screen relative bg-cover bg-center text-white' style = {{backgroundImage: `url(${bannerImg})`}}>
      <div className='md:pt-40 pt-24 px-3 text-center space-y-7 md:w-2/3 mx-auto' style={{ textShadow: '0 0 8px rgba(0,0,0,0.6)' }}>

        <h1 className='text-3xl lg:text-6xl font-medium lg:leading-tight leading-snug'>Make Your Interior More Minimalistic & Modern</h1>
        <p className='md:text-2xl font-normal'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

        {/* Search field  */}
        <div className='relative inline-block z-30'>
          <input type="text" placeholder='Search furniture' className='w-full md:w-80 px-5 py-2.5 bg-black/50 rounded-full border-gray-300 focus:outline-none' />
          <div className='absolute right-2.5 top-1/2 transform -translate-y-1/2 cursor-pointer p-2 rounded-full bg-black hover:text-yellow-300'>
            <FaSearch />
          </div>
        </div>
      </div>

        {/* bottom blur effect  */}
      <div className='absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm' />
    </section>
  );
};

export default Hero;