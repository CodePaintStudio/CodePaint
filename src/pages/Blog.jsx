import React, {
  useEffect, useRef, useState, useCallback,
} from 'react';
import styles from '../styles/blog.module.css';
import NavHeader from '../components/NavHeader';
import SearchBar from '../components/SearchBar';
import BlogItem from '../components/BlogItem';
import { getAllArticle } from '../api/article';

function Blog() {
  const [searchKey, setSearchKey] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [displayedBlogs, setDisplayedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noMoreData, setNoMoreData] = useState(false);
  const loaderRef = useRef(null);
  const updateDisplayedBlog = (data) => {
    setIsLoading(true);
    setDisplayedBlogs((prevBlogs) => {
      const currentLength = prevBlogs.length;
      const nextBlogs = data.slice(currentLength, currentLength + 8);
      const newBlogs = [...prevBlogs, ...nextBlogs];

      if (newBlogs.length >= data.length) {
        setNoMoreData(true);
      }

      setIsLoading(false);
      return newBlogs;
    });
    // console.log(displayedBlogs);
  };

  const loadMoreBlogs = useCallback((data = blogs) => {
    updateDisplayedBlog(data);
  }, [blogs]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllArticle();
      setBlogs(data);
      loadMoreBlogs(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && !noMoreData) {
          // console.log("Loading more...");
          loadMoreBlogs();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [isLoading, noMoreData, loadMoreBlogs]);

  function handleSearch() {
    // Implement search logic
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.mainTitle} />
        <NavHeader activeIndex={3} />
        <div className={styles.introContainer}>
          <div className={styles.subTitle} />
          <div className={styles.searchBarContainer}>
            <SearchBar
              searchKey={searchKey}
              setSearchKey={setSearchKey}
              handleSearch={() => handleSearch}
            />
          </div>
          <div className={styles.blogContainer}>
            {displayedBlogs.map((blog) => (
              <BlogItem
                key={blog.articleId}
                title={blog.articleTitle}
                image={blog.articleImgUrl}
                id={blog.articleId}
                info={blog.articleInfo}
              />
            ))}
          </div>
          {!noMoreData && <div ref={loaderRef} style={{ marginTop: '2.604vw', height: '20px' }}></div>}
          {isLoading && <div>正在加载更多文章...</div>}
          {noMoreData && <div>没有更多文章了</div>}
        </div>
      </div>
    </div>
  );
}

export default Blog;
