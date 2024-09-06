import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom";

import {ConfigProvider} from "antd";
import zhCN from 'antd/locale/zh_CN';

import './reset.css'
import 'dayjs/locale/zh-cn';

import '@toast-ui/editor/dist/toastui-editor.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ConfigProvider locale={zhCN}>
            <App/>
        </ConfigProvider>
    </BrowserRouter>
)
