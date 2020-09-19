import React, { useState } from "react";
import "./Pictures.css";
import useImagesSearch from '../Components/useImagesSearch';

import InfiniteScroll from "react-infinite-scroll-component";

function Pictures() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  
  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }
  
  const {
    pictures,
    hasMore,
    loading,
    error
  } = useImagesSearch(query, pageNumber);
  

  return (
    <div className="pictures-container">
      <input className="searchbar" type="text" onChange={handleSearch} placeholder="Search..."/>
      <div className="pictures-content">
      {
        pictures.map(picture => {
          if (picture.links) {
            return <img src={picture.links[0].href} />

          }
        })
      }
      </div>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </div>
  );
}

export default Pictures;
