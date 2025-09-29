import React from 'react';
import { CgArrowLongRight } from "react-icons/cg";

const Button = ({text}) => {
  return (
    <div>
      <button className='flex items-center text-sm text-red-300'>
          {text} <CgArrowLongRight />
      </button>
    </div>
  );
};

export default Button;