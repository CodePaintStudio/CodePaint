import React, { useRef } from 'react';
import styles from '../styles/homepage.module.css';
import NavHeader from '../components/NavHeader';

function HomePage() {
  const contentRef = useRef(null);
  function handleScroll() {
    contentRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
      {/* 首页标题页 */}
      <section className={styles.background}>
        <div className={styles.homeItems}>
          <div className={styles.logo} />
          <div className={styles.title} />
          <div className={styles.spiltLine} />
          <p className={styles.slogan}>加入码绘 马上就会</p>
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
      <section>
        <div ref={contentRef} style={{ height: '100vh' }}>
          <NavHeader />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
