import React from 'react';
import materialImg1 from '../../assets/material1.png';
import materialImg2 from '../../assets/material2.png';
import materialImg3 from '../../assets/material3.png';
import Button from './../../components/Button';


const Materials = () => {
  return (
    <section className='container max-w-screen-2xl mx-auto py-5 px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20'>
      
      <div className='md:w-1/2 mx-auto'>
        <h3 className='uppercase text-lg font-semibold text-yellow-600 mb-4'>Materials</h3>
        <h2 className='capitalize text-4xl font-bold mb-4 md:w-2/3'>Using Valuable Materials to Making Furniture!</h2>
        <p className='text-gray-600 mb-5 md:w-2/3 lg:w2/3'>Because A.H Furniture is very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
        <Button text='More Info' />
      </div>

      <div className='md:w-1/2 flex md:items-end items-center'>
        <div>
          <img src={materialImg1} alt="" />
          <img src={materialImg2} alt="" />
        </div>
        <div>
          <img src={materialImg3} alt="" className='w-full md:w-[541px]' />
        </div>
      </div>
    </section>
  );
};

export default Materials;