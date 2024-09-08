import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom";

import {Provider} from 'react-redux';
import store from './store/store.js';

import {ConfigProvider} from "antd";
import zhCN from 'antd/locale/zh_CN';

import './reset.css'
import 'dayjs/locale/zh-cn';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <ConfigProvider locale={zhCN}>
                <App/>
            </ConfigProvider>
        </BrowserRouter>
    </Provider>
)
