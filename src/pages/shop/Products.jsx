import React from 'react';
import { products } from './../../utils/Products';
import ProductCard from './ProductCard';

const Products = ({headline}) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];

  return (
    <div>
      <div className='container max-w-screen-2xl mx-auto py-5 px-4'>
        <h2 className='text-4xl font-bold text-center my-8'>{headline}</h2>

        {/* Category Tabs */}
        <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-1 py-1 mb-16'>
          <div className='flex flex-col justify-center sm:flex-row items-center md:justify-between'>
            {
              categories.map((category) =>(
                <button key={category} className={'py-1.5 sm:px-5 px-8 rounded-full hover:bg-gray-500 hover:text-white transitions-colors cursor-pointer'}>{category}</button>
              ))
            }
          </div>
        </div>

        {/* Products Grid  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          }
        </div>

      </div>
    </div>
  );
};

export default Products;