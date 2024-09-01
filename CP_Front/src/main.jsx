import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import {ConfigProvider} from "antd";
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ConfigProvider locale={zhCN}>
            <App/>
        </ConfigProvider>
    </BrowserRouter>
)
