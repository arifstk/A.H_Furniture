import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../App.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { reviews } from './../../utils/reviews';
import Rating from './../../components/Rating';


const Testimonial = () => {
  return (
    <section className='px-8'>
      <div className='text-center mb-12'>
        <h3 className='uppercase text-lg font-semibold text-yellow-600 mb-4'>Testimonials</h3>
        <h2 className='capitalized text-4xl font-semibold mb-4'>Our Client's Reviews</h2>

        {/* <Button text='More Info' /> */}
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}

        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          reviews.map((review, index) => {
            return (
              <SwiperSlide key={index} className='bg-no-repeat bg-cover rounded-lg mb-8 md:mb-1' style={{backgroundImage: `url(${review.coverImg})`}}>
                <div className='md:h-[500px] flex justify-center items-center mb-4'>
                  <div className='mt-13 md:mb-5 bg-white border rounded-xl w-4/5 md:w-4/5 p-4 relative'>
                    <img src={review.image} alt="" className='size-20 absolute -top-9 left-1/2 -translate-x-1/2 ring-2 ring-gray-500 object-cover rounded-full'/>
                    <div className='mt-16 text-center'>
                      <h3 className='text-lg font-semibold'>{review.name}</h3>
                      <p className='mb-3'>Verified Customer</p>
                      <p className='text-gray-500 mb-4'>{review.review}</p>
                      <div className='w-full mx-auto mb-2 flex items-center justify-center text-center'>
                        <Rating rating={review.rating}/>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimonial;