import {useNavigate} from 'react-router-dom';
import RouteConfig from "../router/index.jsx"
import {
    CarryOutOutlined,
    UserOutlined,
    AppstoreOutlined,
    LineChartOutlined,
    EditOutlined
} from '@ant-design/icons';

import {Layout, Menu, theme} from 'antd';
import * as style from "../styles/PageContainer.module.css"

const {Sider, Content} = Layout;

export default function PageContainer() {
    const navigate = useNavigate();
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    const handleClick = (e) => {
        switch (e.key) {
            case '1':
                navigate('/home');
                break;
            case '2':
                navigate('/articles');
                break;
            case '3':
                navigate('/addarticle');
                break;
            case '4':
                navigate('/handleadd');
                break;
            case '5':
                navigate('/user');
                break;
            default:
                break;
        }
    };

    return (
        <Layout style={{maxHeight: '100vh'}}>
            <Sider trigger={null}>
                <div className={style.logo_box}>
                    <span className={style.logo_box_text}>CodePaint <br/> 官网后台管理系统</span>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={handleClick}
                    items={[
                        {
                            key: '1',
                            icon: <LineChartOutlined/>,
                            label: '工作台',
                        },
                        {
                            key: '2',
                            icon: <AppstoreOutlined/>,
                            label: '文章管理',
                        },
                        {
                            key: '3',
                            icon: <EditOutlined/>,
                            label: '文章发布',
                        },
                        {
                            key: '4',
                            icon: <CarryOutOutlined/>,
                            label: '申请处理',
                        },
                        {
                            key: '5',
                            icon: <UserOutlined/>,
                            label: '个人中心',
                        }
                    ]}
                />
            </Sider>
            <Layout>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        height: '100vh',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <RouteConfig/>
                </Content>
            </Layout>
        </Layout>
    );
};