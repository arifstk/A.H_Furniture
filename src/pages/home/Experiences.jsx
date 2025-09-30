import React from 'react';
import experiencesImg from '../../assets/expricences.png';
import Button from './../../components/Button';

const Experiences = () => {
  return (
    <section className='container max-w-screen-2xl mx-auto py-5 px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20'>
      <div className='md:w-1/2 md:h-[541px]'>
        <img src={experiencesImg} alt="" className='h-full w-full' />
      </div>
      <div className='md:w-1/2 mx-auto'>
        <h3 className='uppercase text-lg font-semibold text-yellow-600 mb-4'>Experiences</h3>
        <h2 className='capitalize text-4xl font-bold mb-4 md:w-2/3'>We Provide You The Best Experience!</h2>
        <p className='text-gray-600 mb-5 md:w-2/3 lg:w2/3'>You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and with premium quality materials</p>
        <Button text='More Info' />
      </div>
    </section>
  );
};

export default Experiences;