import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';


const SecondaryContainer = () => {

  const movies = useSelector(store=>store.movies);
  
  if(!movies) return null;
  // console.log(movies)
  return (
    <div className='bg-black bg-opacity-95'>
      <div className='lg:-mt-28 xl:-mt-60 md:-mt-[90px] sm:-mt-26 -mt-8 relative md:pl-8 sm:pl-4 pl-2 z-30 '>
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />  
        <MovieList title="Upcoming" movies={movies.upComingMovies} />
        <MovieList title="Toprated" movies={movies.topratedMovies} />
        <MovieList title="Popular " movies={movies.popularMovies} />
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
