import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/activity.module.css';
import { Autoplay, Pagination } from 'swiper/modules';

function ActivitySwiper(props) {
  const swiperRef = useRef(null);
  return (
    <>
      <Swiper
        loop
        navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
        spaceBetween={40}
        slidesPerView={3}
        className={`${styles.carousel} ${props.customClass}`}
        modules={[Autoplay, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {props.imagesItems.map((image, index) => (
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

export default ActivitySwiper;
