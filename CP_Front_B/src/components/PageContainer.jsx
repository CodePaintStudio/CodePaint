import {useNavigate} from 'react-router-dom';
import RouteConfig from "../router/index.jsx"
import {
    CheckCircleFilled,
    SmileFilled,
    EditFilled,
    HomeFilled,
    BookFilled
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
            <Sider trigger={null} style={{backgroundColor: colorBgContainer}} width="13vw">
                <div className={style.logo_box}>
                    <span
                        className={style.logo_box_text}
                        style={{
                            fontSize: 17,
                        }}
                    >
                        <h1
                            style={{
                                display: "inline",
                                fontSize: 28
                            }}>
                            CODEPAINT
                        </h1>
                        <br/>
                        官网后台管理系统
                    </span>
                </div>
                <Menu
                    horizontalItemSelectedColor="rgb(107, 172, 163)"
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={handleClick}
                    items={[
                        {
                            key: '1',
                            icon: <HomeFilled style={{color: "rgb(107, 172, 163)"}}/>,
                            label: '首页',
                        },
                        {
                            key: '2',
                            icon: <BookFilled style={{color: "rgb(107, 172, 163)"}}/>,
                            label: '文章管理',
                        },

                        {
                            key: "3",
                            icon: <EditFilled style={{color: "rgb(107, 172, 163)"}}/>,
                            label: "新增文章"
                        },
                        {
                            key: '4',
                            icon: <CheckCircleFilled style={{color: "rgb(107, 172, 163)"}}/>,
                            label: '申请处理',
                        },
                        {
                            key: '5',
                            icon: <SmileFilled style={{color: "rgb(107, 172, 163)"}}/>,
                            label: '个人中心',
                        }
                    ]}
                />
            </Sider>
            <Content
                style={{
                    margin: '24px 16px',
                    height: 'calc(100vh - 48px)',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <RouteConfig/>
            </Content>
        </Layout>
    );
};