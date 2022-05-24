import React, { useState, useEffect } from "react";
import "./PhotoAlbum.css";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PhotoAlbum = ({ scrollPosition }) => {
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
    setImgData(res.data);
  };
  return (
    <>
      <div>PhotoAlbum</div>

      {imgData &&
        imgData.map((img) => (
          <div key={img.id} className="card_wrapper">
            <p>{img.title}</p>
            <LazyLoadImage
              alt=""
              effect="blur"
              thumb={img.thumbnailUrl}
              src={img.url}
              height="100"
              width="256"
              scrollPosition={scrollPosition}
            />
          </div>
        ))}
    </>
  );
};

export default PhotoAlbum;
