import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from "swiper";
import Categories from './Categories';


const SlideCard = () => {
  return (
    
  
       <div className=' '>
       
        <div className=' '>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper translate-y-[-20rem] w-[80%] translate-x-[7rem] rounded-[5px] "
       >
            <SwiperSlide> <img src="./image/fitness_1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide> <img src="./imag/1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide>    <img src="./imag/2.jpg" alt="" /></SwiperSlide>
      <SwiperSlide>  <img src="./imag/3.jpg" alt="" /></SwiperSlide>
      <SwiperSlide>    <img src="./imag/4.jpg" alt="" /></SwiperSlide>
      <SwiperSlide>  <img src="./imag/6.jpg" alt="" /></SwiperSlide>
    </Swiper>
        </div>
       </div>
  )
}

export default SlideCard