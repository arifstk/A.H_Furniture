import React from 'react';
import { getImgUrl } from '../../utils/getImageURL';
import Rating from '../../components/Rating';

const ProductCard = ({product}) => {
  return (
    <div>
      <div className='bg-[#fafafa]'>
        <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
      </div>
      <div className='p-6 bg-white shadow-sm'>
        <h4 className='text-base mb-1'>{product.category}</h4>
        <h3 className='font-semibold text-xl mb-2'>{product.name}</h3>
        <Rating />
      </div>
    </div>
  );
};

export default ProductCard;