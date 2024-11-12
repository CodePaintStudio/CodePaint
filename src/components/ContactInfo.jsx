import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

function ContactItem({ label, value, action }) {
  return (
    <Box
      className="contactContainer"
      sx={{
        width: "27rem",
        height: "4.2rem",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        borderRadius: "0.857rem",
        justifyContent: "space-between",
        px: 2,
        mb: 1,
      }}
    >
      <Typography fontSize="1.429rem">
        {label}:{value}
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
}

function ContactInfo() {
  const handlePhoneAction = () => {
    window.location.href = "tel:+8618030420516";
  };

  const handleEmailAction = () => {
    window.location.href = "mailto:wujieruanchuang@163.com";
  };

  const handleWeChatAction = () => {
    window.open("https://github.com/CodePaintStudio", "_blank");
  };

  return (
    <Box sx={{ marginTop: "3rem", marginLeft: "7.857rem" }}>
      <ContactItem
        label="联系电话"
        value="18030420516"
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
}

export default ContactInfo;
