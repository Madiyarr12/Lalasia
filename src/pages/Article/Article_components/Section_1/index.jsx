import React from 'react'
import './Section_1.css'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import 'swiper/css/autoplay'
function FirstArticle() {
  return (
    <section>
      <div className="article_parent">
        <div className="article_parent_carousel">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Navigation, Autoplay]}
          >
            <SwiperSlide>
              <img
                src="https://i.postimg.cc/0jJPHSVz/Rectangle-39.png"
                alt="article_photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.postimg.cc/ZqjjrLLj/Rectangle-24.png"
                alt="article_photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.postimg.cc/0jJPHSVz/Rectangle-39.png"
                alt="article_photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.postimg.cc/0jJPHSVz/Rectangle-39.png"
                alt="article_photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.postimg.cc/0jJPHSVz/Rectangle-39.png"
                alt="article_photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.postimg.cc/0jJPHSVz/Rectangle-39.png"
                alt="article_photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.postimg.cc/0jJPHSVz/Rectangle-39.png"
                alt="article_photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.postimg.cc/0jJPHSVz/Rectangle-39.png"
                alt="article_photo"
              />
            </SwiperSlide>
          </Swiper>
          
        </div>
        <div className="article_parent_box">
          <p>Tips and Trick</p>
          <h3 className='line-clamp'>
            This 400-Square-Foot New York Apartment Is Maximized With Custom
            Millwork
          </h3>
          <div className="user-data">
            <img src="https://i.postimg.cc/fLnC1tjV/Ellipse-25-1.png" alt="" />
            <h6>By Morgan Goldberg</h6>
            <p>Tuesday, 17 May 2022</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstArticle
