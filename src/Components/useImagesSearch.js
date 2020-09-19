import React, { useState, useEffect } from "react";
import axios from "axios";

function useImagesSearch(query, pageNumber) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [pictures, setPictures] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel;
          axios(
            {
              method: "GET",
              url: "https://images-api.nasa.gov/search",
              params: {q: query},
              cancelToken: new axios.CancelToken(c => cancel = c)
            }
            ).then(res => {
                // setPictures(prevPictures => {
                //     return [...prevPictures, res.data.collection.items]
                // });
                setPictures(res.data.collection.items);
                setHasMore(res.data.collection.items > 0);
                setLoading(false);
            }).catch(e => {
                if (axios.isCancel(e)) return
            })
            return () => cancel();
      }, [query, pageNumber]);
    
    return { loading, error, pictures, hasMore};
}

export default useImagesSearch
