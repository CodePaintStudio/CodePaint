import axios from 'axios';

const service = axios.create({
  baseURL: 'http://10.7.127.121:7579',
  timeout: 5000,
});

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // 如果响应成功，直接返回数据
    if (response.data && response.data.data && response.data.data.data) {
      return response.data.data.data;
    }
    // 如果数据结构不符合预期，可以选择返回整个响应
    return response;
  },
  (error) => {
    // 处理错误情况
    console.error('请求错误:', error);
    return Promise.reject(error);
  },
);

export default service;
