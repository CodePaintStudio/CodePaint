import React, { useRef } from "react";
import styles from "../styles/home.module.css";

function Home(props) {
  const swiperRef = useRef(null);

  return (
    <>
      <div className={styles.subTitle}>CODEPAINT</div>
      <div className={styles.mainContent}>
        <h1
          style={{
            fontSize: "3rem",
            width: "100%",
            color: "#68a69f",
            textAlign: "center",
          }}
        >
          码绘CodePaint工作室
        </h1>
        <p
          style={{
            marginTop: "5rem",
            fontSize: "1.1rem",
            color: "#838383",
          }}
        >
          <h2>🎉简介 </h2>码绘 CodePaint
          技术培养团队（原无界软创技术培养团队），成立于 2023 年 3 月10
          日。致力于提升计软学院学生的大前端技术和 UI
          设计的能力提升，最后辐射到学院竞赛，对接项目，提升高质量就业数量等；
        </p>
        <p
          style={{
            marginTop: "2rem",
            fontSize: "1.1rem",
            color: "#838383",
          }}
        >
          <h2>🚩发展目标</h2>
          码绘CodePaint工作室以成为一个“技术氛围浓厚、可持续迭代、满足中大型项目开发需求”的技术团队为发展目标，
          <span style={{ fontWeight: "bold" }}>“加入码绘，码上就绘”</span>
          为发展口号。以技术培养、竞赛发展、项目开发为基准节奏，持续输出全能人才，保证成员优质就业。
        </p>
        <p
          style={{
            marginTop: "2rem",
            fontSize: "1.1rem",
            color: "#838383",
          }}
        >
          <h2>✈️工作室日常</h2>
          以基础技术培养、竞赛参与、项目开发为主旋律，技术分享、组织活动、学习交流为辅。
        </p>
        <p
          style={{
            marginTop: "2rem",
            fontSize: "1.1rem",
            color: "#838383",
          }}
        >
          <h2>💡工作室概况</h2>
          码绘CodePaint工作室虽成立不久，截至目前
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            （2024/11/13）
          </span>
          学科竞赛上累计获得国家级奖项 5 次、省级奖项40
          余次；商业项目交付上累计交付 10 余个，也有 8 位同学成功拿到大厂
          offer；
        </p>
      </div>
    </>
  );
}

export default Home;
