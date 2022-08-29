import React, { useEffect, useState } from 'react'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import 'swiper/css/autoplay'
import styles from './Section_3.module.css'
import Card from './../../../../shared_components/Card/index'
import axios from 'axios'
function SectionThird() {
  const [allproduct, setAllProduct] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3000/productCard')
      .then(function (response) {
        // handle success
        setAllProduct(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }, [])
  return (
    // className={styles.parent}
    <section className={styles.parent} >
      <div className={styles.text}>
        <h5>Product</h5>
        <h2>Our popular product</h2>
        <p>
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Navigation, Autoplay]}
        className={styles.carousel}
      >
        {
          (allproduct != null,
          allproduct.map((card) => (
            <SwiperSlide>
              <Card card={card} />
            </SwiperSlide>
          )))
        }
      </Swiper>
    </section>
  )
}

export default SectionThird
