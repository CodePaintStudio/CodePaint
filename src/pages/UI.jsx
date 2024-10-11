import React, { useEffect, useState } from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import styles from '../styles/ui.module.css';
import NavHeader from '../components/NavHeader';
import SearchBar from '../components/SearchBar';
import { getAllWorks } from '../api/uiWorks';

function Ui(props) {
  const [searchKey, setSearchKey] = useState('');
  const [workList, setWorkList] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [filterList,setFilterList] = useState([]);
  const baseURL = 'http://47.109.193.161:3543/';
  // const imagesItems = [
  //   {
  //     img: '../src/images/ui_works/test_img.png',
  //     author: 'rurudo',
  //     title: 'Sugar Rush',
  //     competition: "C101",
  //     category: "comic"
  //   },
  //   {
  //     img: '../src/images/ui_works/test_img.png',
  //     author: 'rurudo',
  //     title: 'Sugar Rush',
  //     competition: "C101",
  //     category: "comic"
  //   },
  //   {
  //     img: '../src/images/ui_works/test_img.png',
  //     author: 'rurudo',
  //     title: 'Sugar Rush',
  //     competition: "C101",
  //     category: "comic"
  //   },
  //   {
  //     img: '../src/images/ui_works/test_img.png',
  //     author: 'rurudo',
  //     title: 'Sugar Rush',
  //     competition: "C101",
  //     category: "comic"
  //   },
  //   {
  //     img: '../src/images/ui_works/test_img.png',
  //     author: 'rurudo',
  //     title: 'Sugar Rush',
  //     competition: "C101",
  //     category: "comic"
  //   },
  // ];

  useEffect(() => {
    async function fetchData() {
      const data = await getAllWorks();
      // console.log(data);
      setWorkList(data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    if (!searchKey) {
      setIsSearched(false);
    }
  }, [searchKey]);
  function handleSearch() {
    if (searchKey) {
      setIsSearched(true);
      console.log(workList);
      const lowerCaseSearchKey = searchKey.toLowerCase(); // 将 searchKey 转为小写
      const filteredList = workList.filter((work) => (
        work.workAuthor.toLowerCase().includes(lowerCaseSearchKey)
          || work.workTitle.toLowerCase().includes(lowerCaseSearchKey)
          || work.workDescription.toLowerCase().includes(lowerCaseSearchKey)
      ));
      console.log(filteredList);
      setFilterList(filteredList);
    }
  }
  const displayList = isSearched ? filterList : workList;
  return (
    <div className={styles.mainContainer}>
      <div style={{ height: '154.25926vh' }} className={styles.mainContainer}>
        <div className={styles.mainTitle} />
        <NavHeader activeIndex={2} />
        <div className={styles.introContainer}>
          <div className={styles.subTitle} />
          <div className={styles.titleWorkCase} />
          <div className={styles.titleWorkCaseCn} />
          <div className={styles.searchBarContainer}>
            <SearchBar
              searchKey={searchKey}
              setSearchKey={setSearchKey}
              handleSearch={() => handleSearch()}
            />
          </div>
          <ImageList
            gap="4.271vw"
            sx={{
              width: '75.3125vw',
              height: '78.125vw',
            }}
            className={styles.works}
          >
            {displayList.map((item, index) => (
              <ImageListItem
                key={index}
                sx={{
                  width: '35.521vw',
                  height: '49.84375vw !important',
                  marginBottom: '2vw',
                  '& .MuiImageListItemBar-subtitle': {
                    display: 'flex',
                    flexWrap: 'wrap',
                  },
                  '& .MuiImageListItemBar-subtitle div': {
                    width: '60%',
                    height: '1.458vw',
                    lineHeight: '1.458vw',
                    fontsize: '1.042vw',
                  },
                }}
              >
                <img
                  src={`${baseURL}${item.workCover}`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderRadius: '1.042vw',
                    display: 'flex',
                    justifyContent: 'center',
                    width: '35.521vw',
                    height: '49.84375vw',
                  }}
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={(
                    < >
                      <div>类别：{item.workType}</div>
                      <div>赛道：{item.workType}</div>
                      <div>作者：{item.workAuthor}</div>
                    </>
                  )}
                  postion="bottom"
                  sx={{
                    width: '30.417vw',
                    height: '6.823vw',
                    borderRadius: '1.042vw',
                    // padding: '0.5vw',
                    margin: '2.552vw',
                    position: 'absolute',
                    top: '43.542vw',
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  );
}

export default Ui;
