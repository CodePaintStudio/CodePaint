import React, { useEffect, useState } from 'react';
import styles from '../styles/activity.module.css';
import NavHeader from '../components/NavHeader';
import ActivitySwiper from '../components/ActivitySwiper';
import { getActivity, getRecentActivity } from '../api/activty';

function Activity(props) {
  const [activity, setActivity] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);
  const [pastList, setPastList] = useState([]);
  const baseURL = 'http://47.109.193.161:6677/';
  // let imagesItems = [
  //   // '../src/images/homepage/home_background.webp',
  //   // '../src/images/homepage/home_background.webp',
  //   // '../src/images/homepage/home_background.webp',
  //   // '../src/images/homepage/home_background.webp',
  //   // '../src/images/homepage/home_background.webp',
  // ];
  useEffect(() => {
    async function fetchData() {
      const upcomingData = await getActivity();
      const pastData = await getRecentActivity();
      setActivity(upcomingData);
      const upcomingImages = upcomingData.map((item) => ({
        id: item.id,
        image: `${baseURL}${item.picture}`,
      }));
      const pastImages = pastData.data.data.map((item) => ({
        id: item.id,
        image: `${baseURL}${item.picture}`,
      }));
      setUpcomingList(upcomingImages);
      setPastList(pastImages);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div style={{ height: '154.25926vh' }} className={styles.mainContainer}>
        <div className={styles.mainTitle} />
        <NavHeader activeIndex={1} />
        <div className={styles.introContainer}>
          <div className={styles.subTitle} />
          <div className={styles.titleUnpacking}>UPCOMING ACTIVITIES</div>
          <div className={styles.titleUnpackingCn}>活动预告</div>
          {/* customClass用于轮播图定位 */}
          {activity.length ? <ActivitySwiper imagesItems={upcomingList} key="unpack" customClass={styles.swiperUnpack} /> : ''}
          <div className={styles.titleHistory}>PAST ACTIVITIES</div>
          <div className={styles.titleHistoryCn}>历史活动</div>
          {activity.length ? <ActivitySwiper imagesItems={pastList} key="history" customClass={styles.swiperHistory} /> : ''}
        </div>
      </div>
    </div>
  );
}

export default Activity;
