import React, { useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import NavHeader from "./components/NavHeader";
import styles from "./styles/home.module.css";
import RouteConfig from "./router";
import countPost from "./api/count";

export default function App() {
  const constraintsRef = useRef(null);
  // 页面加载完成计数
  useEffect(() => {
    countPost();
  }, []);

  // 使用 motion 的滚动动画
  const { scrollYProgress } = useViewportScroll();
  const scaleHeader = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const container = {
    hidden: { opacity: 1, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const contentRef = useRef(null);
  function handleScroll() {
    contentRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.pageContainer}>
      {/* 首页标题页 */}
      <motion.section
        className={styles.background}
        style={{ scale: scaleHeader }}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.homeItems} variants={container}>
          <motion.div ref={constraintsRef} variants={item}>
            <motion.div
              className={styles.logo}
              drag
              dragConstraints={constraintsRef}
            />
          </motion.div>

          <motion.div className={styles.title} variants={item}>
            <span>C</span>ODE<span>P</span>AINT
          </motion.div>

          <motion.div className={styles.spiltLine} variants={item} />

          <motion.p className={styles.slogan} variants={item}>
            加入码绘 码上就绘
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className={styles.button}
            onClick={handleScroll}
            onKeyDown={handleScroll}
            aria-label="Scroll to section"
            role="button"
            tabIndex="0"
            variants={item}
          />
        </motion.div>
      </motion.section>

      {/* 首页主要内容 */}
      <motion.section className={styles.mainArea}>
        <div
          ref={contentRef}
          className={styles.mainContainer}
          style={{ zIndex: 40 }}
        >
          <div className={styles.mainTitle}>
            <span>C</span>
            ODE
            <span>P</span>
            AINT
          </div>
          <NavHeader activeIndex={0} />
          <div className={styles.introContainer}>
            <RouteConfig />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
