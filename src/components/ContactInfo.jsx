import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Add as AddIcon, LocalPhoneOutlined } from '@mui/icons-material';

const ContactItem = ({ label, value, action }) => (
    <Box
        className="contactContainer"
        sx={{
            width: '28.646vw',
            height: '4.6875vw',
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
            mb: 1,
        }}
    >
      <Typography fontSize="1.302vw">
        {label}: {value}
        {/* {value} */}
      </Typography>
      <IconButton
            color="inherit"
            onClick={action}
            aria-label={`Action for ${label}`}
      >
        <AddIcon />
      </IconButton>
    </Box>
);

const ContactInfo = () => {
    const handlePhoneAction = () => {
        window.location.href = 'tel:+861919810';
    };

    const handleEmailAction = () => {
        window.location.href = 'mailto:wujieruanchuang@163.com';
    };

    const handleWeChatAction = () => {
        // 这里可以添加微信公众号的操作，比如打开一个模态框显示二维码
      window.location.href = 'https://github.com/CodePaintStudio';
    };

    return (
        <Box sx={{position: 'absolute', top: '21.40625vw', left: '41.927vw'}}>
            <ContactItem
                label="联系电话"
                value="1919810"
                action={handlePhoneAction}
            />
            <ContactItem
                label="邮箱"
                value="wujieruanchuang@163.com"
                action={handleEmailAction}
            />
            <ContactItem
                label="GitHub"
                value="CodePaintStudio"
                action={handleWeChatAction}
            />
        </Box>
    );
};

export default ContactInfo;