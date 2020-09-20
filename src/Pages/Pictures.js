import React, { useState } from "react";
import "./Pictures.css";
import useImagesSearch from "../Components/useImagesSearch";

function Pictures() {
  const [query, setQuery] = useState("");

  const { pictures, loading, error } = useImagesSearch(query);

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="pictures-container">
      <input
        className="searchbar"
        type="text"
        onChange={handleSearch}
        value={query}
        placeholder="Search..."
      />

          <div className="cards-items">
            {pictures.map((picture, index) => {
              if (picture.links) {
                return (
                  <div className="cards-item" key={index}>
                        <img
                          className="cards-item-img"
                          src={picture.links[0].href}
                          alt={picture.links[0].href}
                        />
                  </div>
                );
              }
            })}
          </div>
      {/* <div className="loading">{loading && "Loading..."}</div> */}
      <div>{error && "Error"}</div>
    </div>
  );
}

export default Pictures;
