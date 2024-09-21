import React, { useState } from 'react';
import { ConfigProvider, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/navHeader.module.css';

const items = [
  {
    label: 'CODEPAINT',
    key: 'home',
  },
  {
    label: '活动',
    key: 'activity',
  },
  {
    label: 'UI作品',
    key: 'UI',
  },
  {
    label: '前端博客',
    key: 'frontEndBlog',
  },
  {
    label: '加入我们',
    key: 'joinus',
  },
];
function NavHeader() {
  const [current, setCurrent] = useState('home');
  const navigate = useNavigate();
  const onClick = (e) => {
    setCurrent(e.key);
    navigate(`/${e.key}`);
  };
  return (
    <Menu
      className={styles.menuContainer}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}

export default NavHeader;
