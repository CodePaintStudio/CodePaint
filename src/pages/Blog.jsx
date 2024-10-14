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
  const [isSearched, setIsSearched] = useState(false);
  const [searchedList, setSearchedList] = useState([]);

  const loadMoreBlogs = useCallback((data = blogs) => {
    setIsLoading(true);
    setDisplayedBlogs((prevBlogs) => {
      const currentLength = prevBlogs.length;
      const nextBlogs = data.slice(currentLength, currentLength + 8);
      const newBlogs = [...prevBlogs, ...nextBlogs];
      // console.log(data);
      if (newBlogs.length >= data.length) {
        setNoMoreData(true);
      }

      setIsLoading(false);
      return newBlogs;
    });
    // console.log(displayedBlogs);
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

  useEffect(() => {
    if (!searchKey) {
      setIsSearched(false);
    }
  }, [searchKey]);
  function handleSearch() {
    if (searchKey) {
      setIsSearched(true);
      const lowerCaseSearchKey = searchKey.toLowerCase(); // 将 searchKey 转为小写
      const filteredList = blogs.filter((blog) => (
        blog.articleAuthor.toLowerCase().includes(lowerCaseSearchKey)
          || blog.articleTitle.toLowerCase().includes(lowerCaseSearchKey)
          || blog.articleInfo.toLowerCase().includes(lowerCaseSearchKey)
      ));
      console.log(filteredList);
      setSearchedList(filteredList);
    }
  }
  const showBlogs = isSearched ? searchedList : displayedBlogs;
  return (
    <>
      <div className={styles.subTitle} />
      <div className={styles.searchBarContainer}>
        <SearchBar
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          handleSearch={() => handleSearch()}
        />
      </div>
      <div className={styles.blogContainer}>
        {showBlogs.map((blog) => (
          <BlogItem
            key={blog.articleId}
            title={blog.articleTitle}
            image={blog.articleImgUrl}
            id={blog.articleId}
            info={blog.articleInfo}
          />
        ))}
      </div>
      {!noMoreData && <div ref={loaderRef} style={{ marginTop: '2.604vw', height: '20px' }} />}
      {isLoading && <div>正在加载更多文章...</div>}
      {!isSearched ? noMoreData && <div>没有更多文章了</div> : ''}
    </>
  );
}

export default Blog;
