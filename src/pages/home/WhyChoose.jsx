import React from 'react';
import Button from '../../components/Button';

const WhyChoose = () => {
  return (
    <section className='container max-w-screen-2xl mx-auto py-5 px-4'>
      <div>
        <h2 className='text-4xl font-bold'>Why<br/>Choosing Us</h2>
      </div>
      <div>
        <h3 className='text-1xl font-bold'>Luxury facilities</h3>
        <p>he advantage of hiring a workspace with us is that gives comfortable service and all-round facilities.</p>
        <Button />
      </div>
      <div>
        <h3 className='text-1xl font-bold'>Affordable Price</h3>
        <p>You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here </p>
      </div>
      <div>
        <h3 className='text-1xl font-bold'>Many Choices</h3>
        <p>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
      </div>
    </section>
  );
};

export default WhyChoose;