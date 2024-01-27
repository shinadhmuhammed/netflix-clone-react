import React, { useEffect, useState } from "react";
import axios from '../../axios';
import "./Banner.css";
import {apiKey,imageUrl} from '../../constants/constants'


function Banner() {

  const[movie,setMovie]=useState()

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
    console.log(response.data);
    setMovie(response.data.results[0])
  })
  },[])
    


  return (
    <div style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}}
     className="banner">
      <div className="content">
        <h1 className="title">{movie?movie.title:''}</h1>
        <div className="banner-buttons">
          <button className="button">play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie?movie.overview:""}</h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
