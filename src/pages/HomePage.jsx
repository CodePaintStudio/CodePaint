import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import NavHeader from '../components/NavHeader';
import styles from '../styles/homepage.module.css';
import 'swiper/css';
import 'swiper/css/pagination';

function HomePage() {
  const contentRef = useRef(null);
  const swiperRef = useRef(null);
  const imagesItems = [
    '../src/images/homepage/home_background.webp',
    '../src/images/homepage/home_background.webp',
    '../src/images/homepage/home_background.webp',
    '../src/images/homepage/home_background.webp',
  ];

  function handleScroll() {
    contentRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={styles.pageContainer}>
      {/* 首页标题页 */}
      <section className={styles.background}>
        <div className={styles.homeItems}>
          <div className={styles.logo} />
          <div className={styles.title} />
          <div className={styles.spiltLine} />
          <p className={styles.slogan}>加入码绘 码上就绘</p>
          <div
            className={styles.button}
            onClick={handleScroll}
            onKeyDown={handleScroll}
            aria-label="Scroll to section"
            role="button"
            tabIndex="0"
          />
        </div>
      </section>
      {/* 首页主要内容 */}
      <section className={styles.mainArea}>
        <div ref={contentRef} style={{ height: '154.25926vh' }} className={styles.mainContainer}>
          <div className={styles.mainTitle} />
          <NavHeader activeIndex={0} />
          <div className={styles.introContainer}>
            <div className={styles.subTitle} />
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
            <div className={styles.mainImage} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
