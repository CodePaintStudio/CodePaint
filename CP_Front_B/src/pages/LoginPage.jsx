import {useState} from 'react';
import {Form, Input, Button, message} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import styles from '../styles/LoginPage.module.css';
import {loginServer, getInfoByNameServer} from '../api/user.js'
import {useDispatch} from "react-redux";
import {changeLoginStatus, initUserInfo} from "../store/userSlice.js"
import BackgroundAnimation from "../components/BackgroundAnimation.jsx";

const LoginPage = () => {
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    });

    const dispatch = useDispatch();

    const onFinish = async (values) => {
        const res = await loginServer({
            username: values.username,
            password: values.password,
        })
        const name = res.data.username;
        const userInfo = await getInfoByNameServer({name: name})
        dispatch(changeLoginStatus(true));
        dispatch(initUserInfo(userInfo));
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        message.success('登录成功')
    };

    const handleForgotPassword = () => {
        message.info('请联系管理员找回密码');
    };

    const handleInfo = (value, key) => {
        setLoginInfo({
            ...loginInfo,
            [key]: value
        })
    };

    const formItemLayout = {
        labelCol: {
            span: 5,
        },
        wrapperCol: {
            span: 24,
        },
    };

    return (
        <BackgroundAnimation className={styles.loginPageContainer}>
            <div className={styles.box}>
                <Form
                    {...formItemLayout}
                    className={styles.loginForm}
                    name="basic"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                >
                    <h1 style={{marginBottom: "5vh"}}>
                        <span style={{color: "blue"}}>C</span>
                        ode
                        <span style={{color: "blue"}}>P</span>
                        aint官网后台管理系统
                    </h1>
                    <Form.Item
                        className={styles.loginFormItem}
                        label="用户名"
                        name="username"
                        rules={[{required: true, message: '请输入用户名!'}]}
                        autoComplete="off"
                    >
                        <Input prefix={<UserOutlined/>} value={loginInfo.username}
                               onChange={(e) => handleInfo(e.target.value, 'username')}
                               placeholder="请输入用户名"/>
                    </Form.Item>

                    <Form.Item
                        className={styles.loginFormItem}
                        label="密码"
                        name="password"
                        rules={[{required: true, message: '请输入密码!'}]}
                    >
                        <Input.Password prefix={<LockOutlined/>} value={loginInfo.password}
                                        onChange={(e) => handleInfo(e.target.value, 'password')}
                                        placeholder="请输入密码"/>
                    </Form.Item>

                    <Form.Item className={styles.loginFormItemLast}>
                        <Button type="primary" htmlType="submit" className={styles.loginButton}>
                            登录
                        </Button>
                        <br/>
                        <a href="#" className={styles.loginForgotPasswordLink} onClick={handleForgotPassword}>
                            忘记密码
                        </a>
                    </Form.Item>
                </Form>
            </div>
        </BackgroundAnimation>
    );
};

export default LoginPage;
