import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { getActivityById } from '../api/activty';
import styles from '../styles/blogDetail.module.css';
import NavHeader from './NavHeader';
import ArticleContentParse from './ArticleContentParse';

function ActivityDetail() {
  const [paramsData] = useSearchParams();
  const [activityContent, setActivityContent] = useState('');
  const [activityValue, setActivityValue] = useState({});
  const navigate = useNavigate();

  const id = paramsData.get('id');
  useEffect(() => {
    async function fetchData() {
      const data = await getActivityById(id);
      setActivityContent(data.content);
      setActivityValue(data);
      // console.log(data);
    }
    fetchData();
  }, [id]);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.mainTitle} />
        <NavHeader activeIndex={1} />
        <div className={styles.introContainer}>
          <div
            className={`${styles.backButton}`}
            onClick={() => navigate('/activity')}
            style={{ cursor: 'pointer' }}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/activity')}
            aria-label="click to previous"
            role="button"
            tabIndex="0"
          />
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontSize: '2.083vw',
            }}
            className={styles.articleTitle}
          >
            {activityValue.title}
          </Typography>
          <Box className={styles.content}>
            <ArticleContentParse content={activityContent} />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default ActivityDetail;
