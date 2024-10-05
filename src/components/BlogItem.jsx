import React from 'react';
import {
  Card, CardActionArea, CardContent, CardMedia, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const baseURL = 'http://47.109.193.161:6677/';

function BlogItem({ title, image, id }) {
  // console.log(`${baseURL}${image}`);
  const navigate = useNavigate();
  return (
    <Card sx={{
      width: '50vw',
      boxShadow: 'none',
      marginTop: '2.66vw',
    }}
    >
      <CardActionArea
        onClick={() => navigate(`/frontEndBlog/detail/${id}`)}
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          borderRadius: '1.042vw',
          height: '9.5vw',
        }}
      >
        <CardMedia
          // image || "../src/images/homepage/home_background.webp"
          image={`${baseURL}${image}`}
          title={title}
          sx={{
            width: '14.364vw',
            height: '9.01vw',
            borderRadius: '1.042vw',
          }}
        />
        <CardContent sx={{
          width: '29.6875vw',
          padding: 0,
        }}
        >
          <Typography variant="h3" fontSize="1.5625vw" marginBottom="2.56vw" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" fontSize="1.042vw" color="#838383" width="29.21875vw">
            {/* {content.length > 100 ? `${content.substring(0, 100)}...` : content} */}
            大概两年以前，面试美团的时候，面试官让我写一道代码题，时间单位转换。具体的题目我忘记了。 原题目我没做过，但是我写的业务代码代码里有类似的单位转换...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BlogItem;