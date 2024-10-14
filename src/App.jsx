import React, { useRef } from 'react';
import NavHeader from './components/NavHeader';
import styles from './styles/home.module.css';
import RouteConfig from './router';

export default function App() {
  const contentRef = useRef(null);
  function handleScroll() {
    contentRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className={styles.pageContainer}>
      {/* 首页标题页 */}
      <section className={styles.background}>
        <div className={styles.homeItems}>
          <div className={styles.logo} />
          <div className={styles.title} />
          <div className={styles.spiltLine} />
          <p className={styles.slogan}>加入码绘 码上就绘</p>
          <div
            className={styles.button}
            onClick={handleScroll}
            onKeyDown={handleScroll}
            aria-label="Scroll to section"
            role="button"
            tabIndex="0"
          />
        </div>
      </section>
      {/* 首页主要内容 */}
      <section className={styles.mainArea}>
        <div ref={contentRef} style={{ minHeight: '110vh' }} className={styles.mainContainer}>
          <div className={styles.mainTitle} />
          <NavHeader activeIndex={0} />
          <div className={styles.introContainer}>
            <RouteConfig />
          </div>
        </div>
      </section>
    </div>
  );
}
