import {useState} from 'react';
import {Form, Input, Button, message} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import styles from '../styles/LoginPage.module.css';
import {loginServer, getInfoByNameServer} from '../api/user.js'
import {useDispatch} from "react-redux";
import {changeLoginStatus, initUserInfo} from "../store/userSlice.js"

const LoginPage = () => {
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    });

    const dispatch = useDispatch();

    const onFinish = async (values) => {
        if (values.username && values.password) {
            const info = {
                username: values.username,
                password: values.password,
            }
            const res = await loginServer(info)
            const name = res.data.username;
            const userInfo = await getInfoByNameServer({name: name})
            dispatch(changeLoginStatus(true));
            dispatch(initUserInfo(userInfo));
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            message.success('登录成功')
        } else {
            message.warning("请输入用户名或密码")
        }

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

    const inputStyle = {
        borderRadius: "10vh",
        height: "5vh",
        border: "2px solid rgb(107, 172, 164)",
        color: "rgb(107, 172, 164)",
        fontWeight: "bold",
        fontSize: "large"
    }

    return (
        <div className={styles.loginPageContainer}>
            <div className={styles.logo}></div>
            <Form
                {...formItemLayout}
                className={styles.loginForm}
                name="basic"
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                <Form.Item
                    className={styles.loginFormItem}
                    name="username"
                    autoComplete="off"
                >
                    <Input
                        style={inputStyle}
                        prefix={<UserOutlined style={{color: "rgb(166, 205, 200)"}}/>}
                        value={loginInfo.username}
                        onChange={(e) => handleInfo(e.target.value, 'username')}
                        placeholder="请输入用户名"/>
                </Form.Item>

                <Form.Item
                    className={styles.loginFormItem}
                    name="password"
                >
                    <Input.Password
                        style={inputStyle}
                        prefix={<LockOutlined style={{color: "rgb(166, 205, 200)"}}/>}
                        value={loginInfo.password}
                        onChange={(e) => handleInfo(e.target.value, 'password')}
                        placeholder="请输入密码"/>
                </Form.Item>

                <Form.Item
                    className={styles.loginFormItemLast}>
                    <button
                        className={styles.loginButton}
                    >
                        登 录
                    </button>
                    <br/>
                    <a
                        href="#"
                        className={styles.loginForgotPasswordLink}
                        onClick={handleForgotPassword}>
                        忘记密码
                    </a>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;
