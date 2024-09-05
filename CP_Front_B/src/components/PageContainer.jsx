import {useState} from 'react';
import {NavLink} from "react-router-dom";
import RouteConfig from "../router/index.jsx"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    CarryOutOutlined,
    UserOutlined,
    AppstoreOutlined,
    LineChartOutlined,
    EditOutlined
} from '@ant-design/icons';

import {Button, Layout, Menu, theme} from 'antd';

const {Header, Sider, Content} = Layout;

export default function PageContainer() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <Layout style={{maxHeight: '100vh'}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
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
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: '90vh',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};