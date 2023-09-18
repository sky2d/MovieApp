import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from 'react-redux';
import { fetchAsyncShows } from '../Features/Movies/movieSlice';
import {fetchAsyncMovies} from "../Features/Movies/movieSlice"
const Home = () => {
const Dispatch=useDispatch();
  useEffect(()=>{
   Dispatch(fetchAsyncMovies());
   Dispatch(fetchAsyncShows());
  },[Dispatch])
  return (
    <>
      <div className="banner"></div>
      <MovieListing />
    </>
  );
}

export default Home