import { React } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Activity from '../pages/Activity';
import UI from '../pages/UI';
import Blog from '../pages/Blog';
import JoinUs from '../pages/JoinUs';

export default function RouteConfig() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/UI" element={<UI />} />
      <Route path="/frontEndBlog" element={<Blog />} />
      <Route path="/joinus" element={<JoinUs />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
  );
}
