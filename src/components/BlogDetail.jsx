import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getArticleById } from '../api/article';
import parse from 'html-react-parser';
import styles from '../styles/blogDetail.module.css';
import NavHeader from './NavHeader';
import SearchBar from './SearchBar';
import BlogItem from './BlogItem';
import { Typography } from '@mui/material';

function BlogDetail(props) {
  const { id } = useParams();
  const [articleContent, setArticleContent] = useState('');
  const [articleValue,setArticleValue] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const data = await getArticleById(id);
      const content = parse(data[0].articleContent);
      setArticleContent(content);
      setArticleValue(data[0]);
    }
    fetchData();
  }, [id]);
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.mainTitle} />
        <NavHeader activeIndex={3} />
        <div className={styles.introContainer}>
          <div
            className={`${styles.backButton}`}
            onClick={() => navigate('/frontEndBlog')}
            onKeyDown={() => navigate('/frontEndBlog')}
            aria-label="click to previous"
            role="button"
            tabIndex="-1"
          />
          <Typography
            sx={{
              fontSize: '2.083vw',
            }}
            className={styles.articleTitle}
          >
            {articleValue.articleTitle}
          </Typography>
          <Typography
            sx={{
              fontSize: '1.5625vw',
              color: '#838383',
            }}
            className={styles.author}
          >
            {articleValue.articleAuthor}
          </Typography>
          <div className={styles.content}>
            {articleContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
