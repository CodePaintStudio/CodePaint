import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar, Toolbar, Tabs, Tab,
} from '@mui/material';

function NavHeader() {
  const [current, setCurrent] = useState(0);
  const navItems = ['CODEPAINT', '活动', 'UI作品', '前端博客', '加入我们'];
  const navigate = useNavigate();

  const onClick = (event, newValue) => {
    setCurrent(newValue);
    navigate(`/${navItems[newValue]}`);
  };

  return (
    <AppBar position="static" sx={{ width: '57.34375vw', backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ width: '100%' }}>
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
                '&.Mui-selected': {
                  color: '#000',
                },
              }}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default NavHeader;
