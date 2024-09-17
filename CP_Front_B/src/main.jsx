import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom";

import {Provider} from 'react-redux';
import store from './store/store.js';

import {ConfigProvider} from "antd";
import zhCN from 'antd/locale/zh_CN';

import './reset.css'
import 'dayjs/locale/zh-cn';

const theme = {
    token: {
        colorPrimary: 'rgb(107, 172, 163)',
        fontFamily: "Koulen",
        colorError: "rgb(107, 172, 164)",
        borderRadiusLG: "1vh",
    },
    components: {
        Table: {
            cellFontSize: "16",
            headerColor: "#6baca3",
            headerSplitColor: "rgb(107, 172, 164)",
            headerBg: "rgba(107, 172, 164, 0.2)",
        }
    }
};


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <ConfigProvider locale={zhCN} theme={theme}>
                <App/>
            </ConfigProvider>
        </BrowserRouter>
    </Provider>
)
