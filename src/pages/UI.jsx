import React, { useEffect, useState } from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ui.module.css';
import SearchBar from '../components/SearchBar';
import { getAllWorks } from '../api/uiWorks';

function Ui(props) {
  const [searchKey, setSearchKey] = useState('');
  const [workList, setWorkList] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [filterList, setFilterList] = useState([]);
  const baseURL = 'http://47.109.193.161:3543/';
  const navigate = useNavigate();

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
    < >
      <div className={styles.subTitle} />
      <div className={styles.titleWorkCase}>WORK CASE</div>
      <div className={styles.titleWorkCaseCn}>作品案例</div>
      <div className={styles.searchBarContainer}>
        <SearchBar
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          handleSearch={() => handleSearch()}
        />
      </div>
      <ImageList
        gap="7.14rem"
        sx={{
          width: '66.286rem',
          height: '78.125vw',
        }}
        className={styles.works}
      >
        {displayList.map((item, index) => (
          <ImageListItem
            key={index}
            sx={{
              width: '29.071rem',
              height: '41.143rem !important',
              marginBottom: '1rem',
              '& .MuiImageListItemBar-subtitle': {
                display: 'flex',
                flexWrap: 'wrap',
              },
              '& .MuiImageListItemBar-subtitle div': {
                width: '60%',
                height: '1.5rem',
                lineHeight: '1.5rem',
                fontsize: '1.5rem',
              },
            }}
          >
            <img
              src={`${baseURL}${item.workCover}`}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: '1.286rem',
                display: 'flex',
                justifyContent: 'center',
                // width: '35.521vw',
                // height: '49.84375vw',
              }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={(
                < >
                  <div
                    onClick={() => navigate(`/work/${item.workId}`)}
                  >
                    <span>作品：</span>
                    <span style={{
                      color: '#6BACA4',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                    >
                      {item.workTitle}
                    </span>
                  </div>
                  <div>
                    类别：
                    {item.workType}
                  </div>
                  <div>
                    赛道：
                    {item.workType}
                  </div>
                  <div>
                    作者：
                    {item.workAuthor}
                  </div>
                </>
                  )}
              postion="bottom"
              sx={{
                width: '24.643rem',
                height: '6.5rem',
                borderRadius: '1.286rem',
                // padding: '0.5vw',
                margin: '2.214rem',
                fontSize: '2rem',
                position: 'absolute',
                top: '35.643rem',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

export default Ui;
