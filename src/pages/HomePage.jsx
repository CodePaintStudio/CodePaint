import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../styles/home.module.css';

function Home(props) {
  const swiperRef = useRef(null);
  const imagesItems = [
    '../src/images/homepage/home_background.webp',
    '../src/images/homepage/home_background.webp',
    '../src/images/homepage/home_background.webp',
    '../src/images/homepage/home_background.webp',
  ];
  return (
    <>
      <div className={styles.subTitle}>CODEPAINT</div>
      <div className={styles.mainImage} />
      <Swiper
        loop
        navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
        spaceBetween={50}
        slidesPerView={1}
        className={styles.carousel}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {imagesItems.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={styles.previousBtn}
        onClick={() => swiperRef.current.slidePrev()}
        onKeyDown={() => swiperRef.current.slidePrev()}
        aria-label="click to previous"
        role="button"
        tabIndex="-1"
      />
      <div
        className={styles.nextBtn}
        onClick={() => swiperRef.current.slideNext()}
        onKeyDown={() => swiperRef.current.slidePrev()}
        aria-label="click to next"
        tabIndex="-2"
        role="button"
      />
    </>
  );
}

export default Home;
