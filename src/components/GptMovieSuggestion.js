import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "../components/MovieList";
// import Loader from "./Loader"




const GptMovieSuggestion = () => {
const gpt = useSelector(store => store.gpt)//subscribing to the store to use here
// const {movieNames, tmdb_matched_movieResults} gpt = useSelector(store => store.gpt)
const {movieNames, tmdb_matched_movieResults} = gpt; // we can destructer like above
if(!movieNames) return null;



  return (
    <div className=' m-4 p-4 text-white'>
      <div>
        {movieNames.map((movieName, index)=>(
          <MovieList key={movieName} title={movieName} movies={tmdb_matched_movieResults[index]}/>
        ))}
      </div>
      
    </div>
  )
}

export default GptMovieSuggestion
