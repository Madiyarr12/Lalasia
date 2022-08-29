import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper'
import './carousel.css'
function Carousel() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={false}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="carousel_container">
            <div className="carousel_text">
              <button>Discount</button>
              <h2>Ramadhan Sale Offer</h2>
              <h3>Get 40% off for the first transaction on Lalasia</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel_container">
            <div className="carousel_text">
              <button>Discount</button>
              <h2>Ramadhan Sale Offer</h2>
              <h3>Get 40% off for the first transaction on Lalasia</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel_container">
            <div className="carousel_text">
              <button>Discount</button>
              <h2>Ramadhan Sale Offer</h2>
              <h3>Get 40% off for the first transaction on Lalasia</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel_container">
            <div className="carousel_text">
              <button>Discount</button>
              <h2>Ramadhan Sale Offer</h2>
              <h3>Get 40% off for the first transaction on Lalasia</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel_container">
            <div className="carousel_text">
              <button>Discount</button>
              <h2>Ramadhan Sale Offer</h2>
              <h3>Get 40% off for the first transaction on Lalasia</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel_container">
            <div className="carousel_text">
              <button>Discount</button>
              <h2>Ramadhan Sale Offer</h2>
              <h3>Get 40% off for the first transaction on Lalasia</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel_container">
            <div className="carousel_text">
              <button>Discount</button>
              <h2>Ramadhan Sale Offer</h2>
              <h3>Get 40% off for the first transaction on Lalasia</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel_container">
            <div className="carousel_text">
              <button>Discount</button>
              <h2>Ramadhan Sale Offer</h2>
              <h3>Get 40% off for the first transaction on Lalasia</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carousel
