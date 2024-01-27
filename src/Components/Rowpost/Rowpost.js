import React, { useEffect, useState } from "react";
import "./Rowpost.css";
import axios from "../../axios";
import { imageUrl } from "../../constants/constants";

function Rowpost(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("error happening");
      });
  }, []);
  

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            className={props.isSmall ? "smallImg" : "img"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="cards"
          />
        ))}
      </div>
    </div>
  );
}

export default Rowpost;
