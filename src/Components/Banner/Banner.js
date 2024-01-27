import React, { useEffect, useState } from "react";
import axios from '../../axios';
import "./Banner.css";
import { apiKey, imageUrl } from '../../constants/constants';
import YouTube from 'react-youtube';

function Banner() {
  const [movie, setMovie] = useState(null);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response) => {
      setMovie(response.data.results[0]);
    });
  }, []);

  const handlePlayClick = () => {
    axios.get(`/movie/${movie.id}/videos?language=en-US&api_key=${apiKey}&language=en-US`).then(response => {
      if (response.data.results.length > 0) {
        setUrlId(response.data.results[0]);
      } else {
        console.log('Trailer is empty');
      }
    });
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0, 
    },
  };

  return (
    <div style={{backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`}} className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title : ''}</h1>
        <div className="banner-buttons">
          <button className="button" onClick={handlePlayClick}>Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade"></div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default Banner;
