import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { getArticleById } from '../api/article';
import styles from '../styles/blogDetail.module.css';
import ArticleContentParse from './ArticleContentParse'; // 导入新组件

function BlogDetail() {
  const { id } = useParams();
  const [articleContent, setArticleContent] = useState('');
  const [articleValue, setArticleValue] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const data = await getArticleById(id);
      setArticleContent(data[0].articleContent);
      setArticleValue(data[0]);
      // console.log(data[0].articleContent);
    }
    fetchData();
  }, [id]);

  return (
    <>
      <div
        className={`${styles.backButton}`}
        onClick={() => navigate('/frontEndBlog')}
        style={{ cursor: 'pointer' }}
        onKeyDown={(e) => e.key === 'Enter' && navigate('/frontEndBlog')}
        aria-label="click to previous"
        role="button"
        tabIndex="0"
      />
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontSize: '3rem',
        }}
        className={styles.articleTitle}
      >
        {articleValue.articleTitle}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: '1rem',
          color: '#838383',
        }}
        className={styles.author}
      >
        {articleValue.articleAuthor}
      </Typography>
      <Box className={styles.content}>
        <ArticleContentParse content={articleContent} />
      </Box>
    </>
  );
}

export default BlogDetail;
