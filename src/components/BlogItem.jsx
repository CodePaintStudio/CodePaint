import React from 'react';
import {
  Card, CardActionArea, CardContent, CardMedia, Typography,
} from '@mui/material';

function BlogItem(props) {
  return (
    <Card sx={{
      width: '50vw',
      boxShadow: 'none',
      marginTop: '2.66vw',
    }}
    >
      <CardActionArea
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          borderRadius: '1.042vw',
          height: '9.5vw',
        }}
      >
        <CardMedia
          image="../src/images/homepage/home_background.webp"
          title="codepaint"
          sx={{
            width: '14.364vw',
            height: '9.01vw',
            borderRadius: '1.042vw',
          }}
        />
        <CardContent sx={{
          width: '29.6875vw',
          padding: 0,
          // paddingBottom: '1.5625vw',
        }}
        >
          <Typography variant="h3" fontSize="1.5625vw" marginBottom="2.56vw" gutterBottom>只写后台管理的前端要怎么提升自己</Typography>
          <Typography variant="body2" fontSize="1.042vw" color="#838383" width="29.21875vw">
            大概两年以前，面试美团的时候，面试官让我写一道代码题，时间单位转换。具体的题目我忘记了。 原题目我没做过，但是我写的业务代码代码里有类似的单位转换...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BlogItem;
