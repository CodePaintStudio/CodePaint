import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar, Toolbar, Tabs, Tab, CssBaseline,
} from '@mui/material';

function NavHeader(props) {
  const [current, setCurrent] = useState(props.activeIndex);
  const navItems = ['CODEPAINT', '活动', 'UI作品', '前端博客', '加入我们'];
  const navItemsKey = ['home', 'activity', 'UI', 'frontEndBlog', 'joinUs'];
  const navigate = useNavigate();

  const onClick = (event, newValue) => {
    setCurrent(newValue);
    navigate(`/${navItemsKey[newValue]}`);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{
          width: '84.896vw', backgroundColor: 'transparent', boxShadow: 'none', padding: '0px',
        }}
      >
        {/* !important用于消除默认的padding */}
        <Toolbar
          sx={{
            height: '100%',
            width: '100%',
            '&.MuiToolbar-root': {
              padding: '0px',
            },
          }}
        >
          <Tabs
            value={current}
            onChange={onClick}
            indicatorColor="none"
            sx={{ width: '100%' }}
          >
            {navItems.map((item, index) => (
              <Tab
                key={index}
                label={item}
                sx={{
                  color: '#FFF',
                  textTransform: 'none',
                  backgroundColor: current === index ? '#FFF' : 'rgba(255,255,255,0.2)',
                  width: '20%',
                  height: '100%',
                  '&.Mui-selected': {
                    color: '#000',
                  },
                }}
              />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavHeader;
