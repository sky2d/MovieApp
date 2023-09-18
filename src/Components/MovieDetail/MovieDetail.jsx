import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShow, getAllMovieOrShow } from '../Features/Movies/movieSlice';
import {AiFillStar} from "react-icons/ai"
import { BsHandThumbsUpFill, BsFillCollectionPlayFill } from "react-icons/bs";
import {SlCalender} from "react-icons/sl"
import "./MovieDetail.scss"
const MovieDetail = () => {
const {imdbID}=useParams();
const dispatch=useDispatch();
const data=useSelector(getAllMovieOrShow);
useEffect(()=>{
  dispatch(fetchAsyncMovieOrShow(imdbID));

},[dispatch,imdbID])
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <AiFillStar />:{data.imdbRating}
          </span>
          <span>
            IMDB Vote <BsHandThumbsUpFill />:{data.imdbVote}
          </span>
          <span>
            Runtime <BsFillCollectionPlayFill />:{data.Runtime}
          </span>
          <span>
            Year <SlCalender />:{data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Genre</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Language</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title}/>
      </div>
    </div>
  );
}

export default MovieDetail