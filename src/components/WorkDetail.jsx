import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getWorkById } from "../api/uiWorks";
import styles from "../styles/workDetail.module.css";
import { Box, Typography } from "@mui/material";
import { baseImgURL } from "../utils/baseURL";
import { Image } from "antd";

function WorkDetail(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [workContent, setWorkContent] = useState({});
  useEffect(() => {
    async function fetchData() {
      const data = await getWorkById(id);
      setWorkContent(data[0]);
    }
    fetchData();
  }, [id]);
  return (
    <>
      <div
        className={`${styles.backButton}`}
        onClick={() => navigate("/UI")}
        style={{ cursor: "pointer" }}
        onKeyDown={(e) => e.key === "Enter" && navigate("/UI")}
        aria-label="click to previous"
        role="button"
        tabIndex="0"
      />
      <Box className={styles.intro}>
        <img
          alt="cover"
          src={`${baseImgURL}${workContent.workCover}`}
          className={styles.cover}
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
        <Box className={styles.basicInfo}>
          <Typography variant="h3" className={styles.title}>
            {workContent.workTitle}
          </Typography>
          <Typography variant="h6" className={styles.createTime}>
            {workContent.workCreateTime?.substring(0, 10)}
          </Typography>
          <Typography
            variant="body1"
            className={styles.description}
            gutterBottom
          >
            {workContent.workDescription}
          </Typography>
        </Box>
        <Box className={styles.display}>
          <Typography variant="h4" className={styles.subtitle}>
            作品展示
          </Typography>
          <Box className={styles.tagDisplay}>
            {workContent.workTags &&
              workContent.workTags.map((tag, index) => (
                <Image
                  loading="lazy"
                  key={index}
                  src={`${baseImgURL}${tag}`}
                  alt={`work tag ${index}`}
                  width={"100%"}
                  style={{ marginBottom: "1rem" }}
                />
              ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default WorkDetail;
