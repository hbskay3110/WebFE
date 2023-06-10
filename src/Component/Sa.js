import React from "react";
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function imgUrl() {
    const id = rand(1, 200);
    return `https://picsum.photos/id/${id}/1920/1080`;
  }
  
  function createSlide() {
    return (
      <SwiperSlide>
        <img className="img" src={imgUrl()} alt="" />
      </SwiperSlide>
    );
  }
export default function Sa(){
    return(
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={2}
        navigation
        autoplay={{ delay: 1000 }}
        pagination={{ clickable: true }}
      >
        {createSlide()}
        {createSlide()}
        {createSlide()}
        {createSlide()}
      </Swiper>
    )
}