import React, { useEffect, useState } from 'react';
import styles from '../styles/blog.module.css';
import NavHeader from '../components/NavHeader';
import SearchBar from '../components/SearchBar';
import OptionsMenu from '../components/OptionsMenu';
import BlogItem from '../components/BlogItem';
import { getAllArticle } from '../api/article';

function Blog(props) {
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    async function fetchData() {
      const data = await getAllArticle();
      console.log(data);
    }
    fetchData();
  }, []);

  function handleSearch(){

  }
  return (
    <div className={styles.mainContainer}>
      <div style={{ height: '154.25926vh' }} className={styles.mainContainer}>
        <div className={styles.mainTitle} />
        <NavHeader activeIndex={3} />
        <div className={styles.introContainer}>
          <div className={styles.subTitle} />
          <div className={styles.searchBarContainer}>
            <SearchBar
              searchKey={searchKey}
              setSearchKey={setSearchKey}
              handleSearch={handleSearch}
            />
            {/* <OptionsMenu /> */}
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
