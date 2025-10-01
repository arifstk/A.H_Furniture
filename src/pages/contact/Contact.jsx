import React from 'react';
import contactBgImg from '../../assets/contact-background.jpg'
import Materials from './../home/Materials';
import Testimonial from './../home/Testimonial';

const Contact = () => {
  return (
    <section className='mx-auto'>
      <div className='w-full h-[400px] relative bg-cover bg-center text-white flex justify-center items-center' style = {{backgroundImage: `url(${contactBgImg})`}}>

      {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)] pointer-events-none z-10"></div>
      
        <h1 className='text-4xl text-white px-3 mx-auto text-center lg:text-6xl font-medium  z-11' style={{ textShadow: '0 0 8px rgba(0,0,0,0.6)'}}>Contact Us</h1>
      </div>
      <Materials />
      <Testimonial />
    </section>
  );
};

export default Contact;