import React, {useState} from 'react';
import {Avatar, Input, Modal, Button, Card, Form, message, Popconfirm} from 'antd';
import {EditOutlined} from '@ant-design/icons';
import {useSelector, useDispatch} from "react-redux";
import {updateStoreUserInfo, clearUserInfo} from "../store/userSlice.js";
import PersonalInfoItem from "../components/UserInfoItem.jsx";
import UploadImg from "../components/UploadImg.jsx";
import {maskMiddle, sleep} from "../utils/tools";
import {changePasswordServer} from '../api/user.js'

const UserPage = () => {
    const [open, setOpen] = useState(false);
    const [passwordInfo, setPasswordInfo] = useState({
        oldPassword: '',
        newPassword: '',
        passwordConfirm: ''
    });

    const userInfo = useSelector(state => state.user.userInfo);
    const dispatch = useDispatch();

    async function handleOk() {
        const data = await changePasswordServer({
            password: passwordInfo.oldPassword,
            newPassword: passwordInfo.newPassword
        });
        dispatch(updateStoreUserInfo(data));
        message.success("密码修改成功");
        setOpen(false);
        sleep(1000).then(() => {
            dispatch(clearUserInfo());
            location.reload()
        })
    }

    function updatePasswordInfo(value, key) {
        setPasswordInfo({
            ...passwordInfo,
            [key]: value
        });
    }

    const modal = <>
        <Form
            name="basic1"
            autoComplete="off"
            initialValues={userInfo}
            onFinish={handleOk}
            labelCol={{span: 5}}
        >
            <Form.Item
                label="登录密码"
                name="oldpassword"
                validateTrigger='onBlur'
                rules={[
                    {
                        required: true,
                    }
                ]}
            >
                <Input.Password
                    rows={6}
                    value={passwordInfo.oldPassword}
                    placeholder="请先输入旧密码"
                    onChange={(e) => updatePasswordInfo(e.target.value, 'oldPassword')}
                />
            </Form.Item>

            <Form.Item
                label="新密码"
                name="newpassword"
                rules={[
                    {
                        required: true,
                    }
                ]}
            >
                <Input.Password
                    rows={6}
                    value={passwordInfo.newPassword}
                    placeholder="请输入新密码"
                    onChange={(e) => updatePasswordInfo(e.target.value, 'newPassword')}
                />
            </Form.Item>

            <Form.Item
                label="确认密码"
                name="passwordConfirm"
                validateTrigger='onBlur'
                rules={[
                    {
                        required: true,
                    },
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('newpassword') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error("两次输入密码不一样"));
                        },
                    })
                ]}
            >
                <Input.Password
                    rows={6}
                    placeholder="请确认密码"
                    value={passwordInfo.passwordConfirm}
                    onChange={(e) => updatePasswordInfo(e.target.value, 'passwordConfirm')}
                />
            </Form.Item>

            <Form.Item wrapperCol={{offset: 5, span: 16}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Button type="primary" htmlType="submit">
                        确认
                    </Button>
                    <Button type="default" onClick={() => {
                        setOpen(false)
                        message.info("已取消修改密码")
                    }}>
                        取消
                    </Button>
                </div>
            </Form.Item>
        </Form>
    </>

    return (
        <>
            <Card title="个人中心" style={{minHeight: '50vh'}}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <Avatar
                        alt="暂无头像信息"
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                        size={128}
                        icon={<EditOutlined/>}
                        style={{
                            marginRight: "5vh"
                        }}
                    />
                    <UploadImg/>
                </div>
                <div style={{marginTop: '5vh'}}>
                    <PersonalInfoItem
                        info={{
                            itemName: "登录账号",
                            itemValue: userInfo.username
                        }}
                    />
                    <PersonalInfoItem info={{
                        itemName: "密码",
                        itemValue: maskMiddle(userInfo.password)
                    }}/>
                    <a href="#"
                       onClick={(e) => {
                           e.preventDefault();
                           setOpen(true)
                       }}
                       style={{color: "rgba(107, 172, 163, 0.8)"}}
                    >修改密码</a>

                    <Popconfirm
                        title="警告"
                        description="确认退出登录吗？"
                        onConfirm={() => {
                            message.success('退出登陆成功');
                            dispatch(clearUserInfo());
                            location.reload();
                        }}
                        onCancel={() => {
                            message.info('已取消退出登录');
                        }}
                        okText="是"
                        cancelText="否"
                    >
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                            style={{
                                marginLeft: "3vh",
                                color: "rgba(107, 172, 163, 0.8)"
                            }}
                        >退出登录</a>
                    </Popconfirm>
                </div>

            </Card>
            <Modal
                title="修改密码"
                open={open}
                footer=''
                onCancel={() => {
                    setOpen(false)
                    message.info("取消修改")
                }}
            >
                {modal}
            </Modal>
        </>

    );
};

export default UserPage;
