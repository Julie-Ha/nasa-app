import React, { useState, useEffect } from "react";
import axios from "axios";

function Pictures() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://images-api.nasa.gov/search?q=venus',
      );
 
      setPictures(result.data.collection.items);
    };
 
    fetchData();
  }, []);

  console.log(pictures);


  return (
    <div>
      {/* <ul>
        {pictures.map((pic) => (
          <img src={pic.links[0].href} />
        ))}
      </ul> */}
    </div>
  );
}

export default Pictures;
