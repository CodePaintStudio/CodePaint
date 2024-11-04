import React from 'react';
import {
  Card, CardActionArea, CardContent, CardMedia, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { baseImgURL,baseURL } from '../utils/baseURL';


function BlogItem({ title, image, id, info }) {
  // console.log(`${baseURL}${image}`);
  const navigate = useNavigate();
  return (
    <Card sx={{
      width: '53.643rem',
      boxShadow: 'none',
      marginTop: '2.571rem',
    }}
    >
      <CardActionArea
        onClick={() => navigate(`/frontEndBlog/detail/${id}`)}
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          borderRadius: '1.286rem',
          height: '10.5rem',
        }}
      >
        <CardMedia
          // image || "../src/images/homepage/home_background.webp"
          image={`${baseImgURL}${image}`}
          title={title}
          sx={{
            width: '15.714rem',
            height: '10rem',
            borderRadius: '1.286rem',
          }}
        />
        <CardContent sx={{
          width: '27rem',
          height: '100%',
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap',
        }}
        >
          <Typography
            variant="h3"
            fontSize="1.674rem"
            marginBottom="0.929rem"
            marginTop="0.557rem"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            fontSize="1.2rem"
            color="#838383"
            width="29.21875vw"
            sx={{
              wordWrap: 'break-word',
            }}
          >
            {info.length > 100 ? `${info.substring(0, 100)}...` : info}
            {/* {info} */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BlogItem;