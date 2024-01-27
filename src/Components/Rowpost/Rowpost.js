import React, { useEffect, useState } from "react";
import "./Rowpost.css";
import axios from "../../axios";
import { imageUrl,apiKey} from "../../constants/constants";
import YouTube from 'react-youtube'

function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  const[urlId,setUrlId]=useState('')


  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("error happening");
      });
  });


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    }
  }

  const handleMovieTrailer=(id)=>{
    axios.get(`/movie/${id}/videos?language=en-US&api_key=${apiKey}&language=en-US`).then(response=>{
      if(response.data.results!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('tailer is empty');
      }
    })
  }



  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img onClick={()=>handleMovieTrailer(obj.id)}
            className={props.isSmall ? "smallImg" : "img"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="cards"
          />
        ))}
      </div>
     { urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  );
}

export default Rowpost;
