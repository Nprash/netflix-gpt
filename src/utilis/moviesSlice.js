import { createSlice } from "@reduxjs/toolkit";

const moviesSlice  =  createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topratedMovies: null,
        upComingMovies: null,
    },
    reducers :{
        addTrailerVideo : (state, action) =>{
            state.trailerVideo = action.payload;
        },
        addNowPlayingMovies :(state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies :(state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopratedMovies :(state, action)=>{
            state.topratedMovies = action.payload;
        },
        addUpcomingMovies :(state, action)=>{
            state.upComingMovies = action.payload;
        },
        removeMovies:(state, action)=>{
            return null;
        }
        
    },
});


export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopratedMovies, addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;