import React from 'react';
import { LiaStarSolid } from "react-icons/lia";
import { LiaStar } from "react-icons/lia";

const Rating = ({rating}) => {
  const totalStar = 5;
  return (
    <div className='flex space-x-1'>
      {
        Array.from({length: totalStar}, (_, index) => {
          const starIndex = index + 1;
          return starIndex <= rating ? (<LiaStarSolid key={index} className='text-yellow-400' />) : (<LiaStar key={index} className='text-gray-400' />);
        })
      }
    </div>
  );
};

export default Rating;