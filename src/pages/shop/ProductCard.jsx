import React from 'react';
import { getImgUrl } from '../../utils/getImageURL';
import Rating from '../../components/Rating';
import { FaCartArrowDown } from "react-icons/fa";

const ProductCard = ({product}) => {
  return (
    <div>
      <div className='bg-[#fafafa]'>
        <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
      </div>
      <div className='p-6 bg-white shadow-sm'>
        <h4 className='text-base mb-1'>{product.category}</h4>
        <h3 className='font-semibold text-xl mb-2'>{product.name}</h3>
        <Rating rating={product.rating}/>
        <div className='flex justify-between mt-1'>
          <p className='text-gray-700 font-bold text-lg'><sup>$</sup><span>{product.price}</span></p>
          <button className='bg-black/70 text-white p-2 rounded-full items-center cursor-pointer hover:bg-black'><FaCartArrowDown /></button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;