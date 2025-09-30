import React, { useState } from 'react';
import { products } from './../../utils/Products';
import ProductCard from './ProductCard';
import { CgArrowLongRight } from "react-icons/cg";

const Products = ({headline}) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [visibleProduct, setVisibleProduct] = useState(4);
  const filteredProducts = products.filter((product) => product.category === selectedCategory);
  
  const loadMoreProducts = ()=> {
    setVisibleProduct((prev)=> prev + 4);
  }

  return (
    <div>
      <div className='container max-w-screen-2xl mx-auto py-5 px-4'>
        <h2 className='text-4xl font-bold text-center my-8'>{headline}</h2>

        {/* Category Tabs */}
        <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-1 py-1 mb-16'>
          <div className='flex flex-col justify-center sm:flex-row items-center md:justify-between'>
            {
              categories.map((category) =>(
                <button onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProduct(4);
                }}
                key={category} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-gray-400 hover:text-white transitions-colors cursor-pointer ${selectedCategory === category ? 'bg-gray-400 text-white':''}`}>{category}</button>
              ))
            }
          </div>
        </div>

        {/* Products Grid  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {
            filteredProducts.slice(0, visibleProduct).map((product, index) => ( //instead of products "filteredProducts"
              <ProductCard key={index} product={product} />
            ))
          }
        </div>
          {/* Load More button */}
        {
          visibleProduct < filteredProducts.length && (
            <div className='flex flex-row justify-center items-center m-4 p-3'>
              <button className='flex items-center text-yellow-600 hover:text-yellow-800 cursor-pointer' onClick={loadMoreProducts}>Load More<CgArrowLongRight/> </button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Products;