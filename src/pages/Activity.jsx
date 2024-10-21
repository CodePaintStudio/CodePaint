import React, { useEffect, useState } from 'react';
import styles from '../styles/activity.module.css';
import ActivitySwiper from '../components/ActivitySwiper';
import { getActivity, getRecentActivity } from '../api/activty';
import baseURL from '../utils/baseURL';

function Activity() {
  const [activity, setActivity] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);
  const [pastList, setPastList] = useState([]);
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
    <>
      <div className={styles.subTitle}>活动</div>
      <div className={styles.titleUnpacking}>UPCOMING ACTIVITIES</div>
      <div className={styles.titleUnpackingCn}>活动预告</div>
      {/* customClass用于轮播图定位 */}
      {activity.length ? <ActivitySwiper imagesItems={upcomingList} key="unpack" customClass={styles.swiperUnpack} /> : ''}
      <div className={styles.titleHistory}>PAST ACTIVITIES</div>
      <div className={styles.titleHistoryCn}>历史活动</div>
      {activity.length ? <ActivitySwiper imagesItems={pastList} key="history" customClass={styles.swiperHistory} /> : ''}
    </>
  );
}

export default Activity;
