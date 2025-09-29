import React from 'react';
import { CgArrowLongRight } from "react-icons/cg";

const Button = () => {
  return (
    <div>
      <button className='flex items-center text-sm text-red-300'>
          More Info <CgArrowLongRight />
      </button>
    </div>
  );
};

export default Button;