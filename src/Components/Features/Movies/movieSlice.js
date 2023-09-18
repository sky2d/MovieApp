import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
   const response = await axios.get(
      "https://www.omdbapi.com/?i=tt3896198&apikey=8d3cd22c&s=harry&type=movie"
   );

   return response.data;
})
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
   const response = await axios.get(
      "https://www.omdbapi.com/?i=tt3896198&apikey=8d3cd22c&s=Friends&type=series"
   );

   return response.data;
})
export const fetchAsyncMovieOrShow = createAsyncThunk('movies/fetchAsyncMovieOrShow', async (id) => {
   const response = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=8d3cd22c&Plot=full`
   );

   return response.data;
})

const initialState = {
   movies: {},
   shows: {},
   selectedMovieOrShow:{},
}

const movieSlice = createSlice({
   name: "movies",
   initialState,
   reducers: {
      addMovies: (state, { payload }) => {
         state.movies = payload;
      }
   },
   extraReducers: {
      [fetchAsyncMovies.pending]: () => {

      },

      [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
         return { ...state, movies: payload };
      },
      [fetchAsyncShows.fulfilled]: (state, { payload }) => {
         return { ...state, shows: payload };
      },
      [fetchAsyncMovieOrShow.fulfilled]: (state, { payload }) => {
         return { ...state, selectedMovieOrShow: payload };
      }
   }
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) =>
   state.movies.movies;
export const getAllShows = (state) =>
   state.movies.shows;
export const getAllMovieOrShow = (state) =>
   state.movies.selectedMovieOrShow;

export default movieSlice.reducer;