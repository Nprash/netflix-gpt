import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';


const SecondaryContainer = () => {

  const movies = useSelector(store=>store.movies);
  if(!movies) return null;
  console.log(movies)
  return (
    <div className='bg-black bg-opacity-95'>
      <div className='-mt-80 relative pl-8 z-30'>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Popular " movies={movies.popularMovies} />
      <MovieList title="Drama" movies={movies.nowPlayingMovies} />
      <MovieList title="Horror" movies={movies.nowPlayingMovies} />
      <MovieList title="Adventures" movies={movies.nowPlayingMovies} />
      <MovieList title="Scintifiction" movies={movies.nowPlayingMovies} />
      </div>
      
      {/* 
        MovieList - popular
                      - movie-cards-horizontal
                  - NowPlaying movies
                  - Trending
                  - Horror movies
                  - 
      
      */}


    </div>
  )
}

export default SecondaryContainer
