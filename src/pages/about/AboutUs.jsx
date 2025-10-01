import React from 'react';
import aboutBgImg from '../../assets/about-background.jpg'
import Experiences from './../home/Experiences';

const AboutUs = () => {
  return (
    <section className='mx-auto'>
      <div className='w-full h-[400px] relative bg-cover bg-center text-white flex justify-center items-center' style = {{backgroundImage: `url(${aboutBgImg})`}}>

      {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)] pointer-events-none z-10"></div>
      
        <h1 className='text-4xl text-white px-3 mx-auto text-center lg:text-6xl font-medium  z-11' style={{ textShadow: '0 0 8px rgba(0,0,0,0.6)'}}>About Us</h1>
      </div>
      <Experiences />
    </section>
  );
};

export default AboutUs;