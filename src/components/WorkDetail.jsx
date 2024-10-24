import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getWorkById } from '../api/uiWorks';
import styles from '../styles/workDetail.module.css';
import { Box, Typography } from '@mui/material';

function WorkDetail(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const baseURL = 'http://47.109.193.161:3543/';
  const [workContent, setWorkContent] = useState({});
  useEffect(() => {
    async function fetchData() {
      const data = await getWorkById(id);
      setWorkContent(data[0]);
      // console.log(data[0]);
    }
    fetchData();
  }, [id]);
  return (
    <>
      <div
        className={`${styles.backButton}`}
        onClick={() => navigate('/UI')}
        style={{ cursor: 'pointer' }}
        onKeyDown={(e) => e.key === 'Enter' && navigate('/UI')}
        aria-label="click to previous"
        role="button"
        tabIndex="0"
      />
      <Box className={styles.intro}>
        <img
          alt="cover"
          src={`${baseURL}${workContent.workCover}`}
          className={styles.cover}
          style={{ objectFit: 'cover' }}
        />
        <Box className={styles.basicInfo}>
          <Typography variant="h3" className={styles.title}>{workContent.workTitle}</Typography>
          <Typography variant="h6" className={styles.createTime}>{workContent.workCreateTime?.substring(0, 10)}</Typography>
          <Typography variant="body1" className={styles.description} gutterBottom>
            {workContent.workDescription}
          </Typography>
        </Box>
        <Box className={styles.display}>
          <Typography variant="h4" className={styles.subtitle}>作品展示</Typography>
          <Box className={styles.tagDisplay}>
            {workContent.workTags && workContent.workTags.map((tag, index) => (
              <img
                key={index}
                src={`${baseURL}${tag}`}
                alt={`work tag ${index}`}
                className={styles.tagImage}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default WorkDetail;
