import axios from 'axios';
import {message} from 'antd';

const baseURL = 'http://127.0.0.1:3000'

const request = axios.create({
    baseURL: baseURL,
    timeout: 10000
})

request.interceptors.response.use(
    (response) => {
        const res = response.data;
        if (res.data.code) {
            switch (res.data.code) {
                case 500: {
                    message.error(res.data.message)
                    return Promise.reject(res.data.data);
                }
                default : {
                    return res.data
                }
            }
        }
        return res.data
    },
    (error) => {
        console.log("响应拦截出错：", error);
    }
);

export default request