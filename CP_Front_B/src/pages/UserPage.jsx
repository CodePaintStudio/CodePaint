import React, {useState} from 'react';
import {Avatar, Input, Modal, Button, Card, Form, message} from 'antd';
import {EditOutlined} from '@ant-design/icons';
import {useSelector} from "react-redux";
import PersonalInfoItem from "../components/UserInfoItem.jsx";
import UploadImg from "../components/UploadImg.jsx";
import {maskMiddle} from "../utils/tools";

const UserPage = () => {
    const userInfo = useSelector(state => state.user.userInfo);

    const [open, setOpen] = useState(false);

    const handleOk = () => {
        setOpen(false)
        message.success("修改成功")
    };

    const modal = <>
        <Form
            name="basic1"
            autoComplete="off"
            initialValues={userInfo}
            onFinish={handleOk}
        >
            <Form.Item
                label="登录密码"
                name="oldpassword"
                validateTrigger='onBlur'
            >
                <Input.Password
                    rows={6}
                    // value={passwordInfo.oldpassword}
                    placeholder="如果要修改密码，请先输入旧密码"
                    // onChange={(e) => updatePasswordInfo(e.target.value, 'oldpassword')}
                />
            </Form.Item>

            <Form.Item
                label="新密码"
                name="newpassword"
            >
                <Input.Password
                    rows={6}
                    // value={passwordInfo.newpassword}
                    placeholder="请输入新密码"
                    // onChange={(e) => updatePasswordInfo(e.target.value, 'newpassword')}
                />
            </Form.Item>

            <Form.Item
                label="确认密码"
                name="passwordConfirm"
                rules={[
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('newpassword') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('两次密码不一致'));
                        },
                    }),
                ]}
                validateTrigger='onBlur'
            >
                <Input.Password
                    rows={6}
                    placeholder="请确认密码"
                    // value={passwordInfo.passwordConfirm}
                    // onChange={(e) => updatePasswordInfo(e.target.value, 'passwordConfirm')}
                />
            </Form.Item>

            <Form.Item wrapperCol={{offset: 5, span: 16}}>
                <Button type="primary" htmlType="submit">
                    确认
                </Button>
                <Button type="default" onClick={() => {
                    setOpen(false)
                    message.info("取消修改")
                }}>
                    取消
                </Button>
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
                    >修改密码</a>
                </div>

            </Card>
            <Modal
                title="修改密码"
                open={open}
                footer=''
            >
                {modal}
            </Modal>
        </>

    );
};

export default UserPage;
