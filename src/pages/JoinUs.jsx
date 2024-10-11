import React, { useState } from 'react';
import {
  FormControl, MenuItem, menuClasses, Typography, Box, TextField,
} from '@mui/material';
import Select, { selectClasses } from '@mui/material/Select';
import { grey } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import NavHeader from '../components/NavHeader';
import styles from '../styles/joinus.module.css';
import { sendFeedback } from '../api/joinus';
import ContactInfo from '../components/ContactInfo';

function JoinUs() {
  const [type, setType] = useState('');
  const [contact, setContact] = useState('');
  const [feedbackContent, setFeedbackContent] = useState('');

  function handleSend() {
    if (!feedbackContent || !type) {
      return;
    }
    sendFeedback({
      content: feedbackContent,
      type,
      contact,
    });
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.mainTitle} />
        <NavHeader activeIndex={4} />
        <div className={styles.introContainer}>
          <div className={styles.subTitle} />
          {/* 信息展示部分 */}
          <div className={styles.titleContact}>CONTACT US</div>
          <div className={styles.titleContactCn}>联系我们</div>
          <Box className={styles.QRCode}>
            <img src="../src/images/joinus/qrcode.svg" alt="QQ交流群二维码" />
          </Box>
          <ContactInfo />
          {/* 反馈填写 */}
          <div className={styles.titleFeedback}>FEEDBACK</div>
          <div className={styles.titleFeedbackCn}>反馈</div>
          <FormControl
            className={styles.feedback}
            sx={{
              height: '45vw !important',
            }}
          >
            {/* 类型选择 */}
            <Box display="flex" alignItems="center" marginBottom="3.229vw" height="3.958vw">
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: 'Inter',
                  fontSize: '1.775vw',
                  marginRight: '1.875vw',
                }}
              >
                选择您的反馈类型
              </Typography>
              <Select
                disableUnderline
                variant="standard"
                MenuProps={{
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                  },
                  sx: {
                    marginBlock: '0.5rem',
                    [`& .${menuClasses.paper}`]: {
                      borderRadius: '0.625vw',
                    },
                    [`& .${menuClasses.list}`]: {
                      paddingTop: 0,
                      paddingBottom: 0,
                      background: 'white',
                      '& li': {
                        paddingTop: '0.625vw',
                        paddingBottom: '0.625vw',
                      },
                      '& li:hover': {
                        background: '#e3f0ef',
                      },
                      '& li.Mui-selected': {
                        color: 'white',
                        background: '#579a92',
                      },
                      '& li.Mui-selected:hover': {
                        background: '#468a80',
                      },
                    },
                  },
                }}
                IconComponent={ExpandMoreIcon}
                value={type}
                onChange={(event) => setType(event.target.value)}
                sx={{
                  width: '14.427vw',
                  height: '3.958vw',
                  padding: '0',
                  // minWidth: 200,
                  '& .MuiSelect-select.MuiInputBase-input.MuiInput-input': {
                    height: '3.958vw !important',
                    lineHeight: '3.958vw',
                    paddingTop: '0px',
                    paddingBottom: '0px',
                  },

                  '& .MuiSvgIcon-root': {
                    color: '#FFF',
                  },
                  [`& .${selectClasses.select}`]: {
                    alignContent: 'center',
                    height: '3.958vw',
                    background: '#202020',
                    color: grey[500],
                    borderRadius: '1.042vw',
                    paddingLeft: '1.25vw',
                    paddingRight: '1.25vw',
                    // paddingTop: '0.729vw',
                    // paddingBottom: '0.78125vw',
                    boxShadow: '0px 5px 8px -3px rgba(0,0,0,0.14)',
                    '&:focus': {
                      borderRadius: '1.042vw',
                      background: '#212121',
                      borderColor: grey[100],
                    },
                  },
                  [`& .${selectClasses.icon}`]: {
                    right: '0.625vw',
                  },
                }}
              >
                <MenuItem value="web_content">网站内容</MenuItem>
                <MenuItem value="web_design">网站设计</MenuItem>
                <MenuItem value="others">其它</MenuItem>
              </Select>
            </Box>
            {/* 联系方式填写 */}
            <Box display="flex" alignItems="center">
              <Typography
                variant="subtitle1"
                sx={{
                  width: '15vw',
                  fontFamily: 'Inter',
                  fontSize: '1.775vw',
                  marginRight: '1.875vw',
                }}
              >
                填写您的联系方式
              </Typography>
              <TextField
                autoComplete="email"
                placeholder="（选填）"
                onChange={(e) => setContact(e.target.value)}
                sx={{
                  width: '55.677vw',
                  height: '3.958vw',
                  backgroundColor: '#202020',
                  borderRadius: '1.042vw',
                  fontSize: '1.875vw',
                  fontFamily: 'Inter',
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                    color: '#FFF',
                  },
                  '& .MuiInputBase-input': {
                    color: '#FFF',
                    fontSize: '1.875vw',
                    paddingTop: '0',
                    paddingBottom: '0',
                    height: '3.958vw',
                    // marginLeft: '0.26vw',
                  },
                }}
              />
            </Box>
            {/* 反馈内容填写 */}
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: 'Inter',
                fontSize: '1.775vw',
                marginRight: '1.875vw',
                marginTop: '4.896vw',
              }}
            >
              填写您的反馈内容
            </Typography>
            <TextField
              autoComplete="email"
              onChange={(e) => setFeedbackContent(e.target.value)}
              sx={{
                // width: '75vw',
                height: '23.4375vw',
                backgroundColor: '#202020',
                borderRadius: '1.042vw',
                fontSize: '1.775vw',
                fontFamily: 'Inter',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                  color: '#FFF',
                },
                '& .MuiInputBase-input': {
                  color: '#FFF',
                  fontSize: '1.875vw',
                  paddingTop: '0',
                  paddingBottom: '0',
                  height: '3.958vw',
                  // marginLeft: '0.26vw',
                },
              }}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={() => handleSend()}
              sx={{
                width: '20%',
                marginTop: '1.221vw',
                marginLeft: '80%',
                backgroundColor: '#202020',
                color: '#FFF',
                borderRadius: '0.7vw',
              }}
            >
              Send
            </Button>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
