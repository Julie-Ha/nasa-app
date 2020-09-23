import { useState, useEffect } from "react";
import axios from "axios";

function useImagesSearch(query) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
      if(query != '') {
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
                setPictures(res.data.collection.items);
                setLoading(false);
            }).catch(e => {
                if (axios.isCancel(e)) return
            })
            return () => cancel();
      }
        
      }, [query]);
    
    return { loading, error, pictures};
}

export default useImagesSearch
