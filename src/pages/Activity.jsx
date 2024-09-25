import React from 'react';
import styles from '../styles/activity.module.css';
import NavHeader from '../components/NavHeader';
import ActivitySwiper from '../components/ActivitySwiper';

function Activity(props) {
  const imagesItems = [
    '../src/images/homepage/homeBg.webp',
    '../src/images/homepage/homeBg.webp',
    '../src/images/homepage/homeBg.webp',
    '../src/images/homepage/homeBg.webp',
    '../src/images/homepage/homeBg.webp',
  ];
  return (
    <div className={styles.mainContainer}>
      <div style={{ height: '154.25926vh' }} className={styles.mainContainer}>
        <div className={styles.mainTitle} />
        <NavHeader activeIndex={1} />
        <div className={styles.introContainer}>
          <div className={styles.subTitle} />
          <div className={styles.titleUnpacking} />
          <div className={styles.titleUnpackingCn} />
          {/* customClass用于轮播图定位 */}
          <ActivitySwiper imagesItems={imagesItems} key="unpack" customClass={styles.swiperUnpack} />
          <div className={styles.titleHistory} />
          <div className={styles.titleHistoryCn} />
          <ActivitySwiper imagesItems={imagesItems} key="history" customClass={styles.swiperHistory} />
        </div>
      </div>
    </div>
  );
}

export default Activity;
