import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieNames:null,
        tmdb_matched_movieResults:null,

    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGPTMovieresults:(state, action)=>{
            const {movieNames, tmdb_matched_movieResults} = action.payload;
            state.movieNames = movieNames;
            state.tmdb_matched_movieResults = tmdb_matched_movieResults;
        }
    },
})


export const {toggleGptSearchView , addGPTMovieresults} = gptSlice.actions;
export default gptSlice.reducer;