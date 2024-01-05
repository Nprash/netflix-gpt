import React from 'react'
import MovieCard from './MovieCard'




const MovieList = ({title, movies,movietitles}) => {

  if(!movies) return null;
//bcz initially the store is nulll when these movies initialised thats why early retun null, after executing this line rest will render
  return (
    <div className='p-2 box-border'>
        <h1 className='xl:text-2xl lg:text-xl  md:text-lg sm:text-md test-sm xl:pb-3 lg:pb-1 pb-0 text-white font-bold'>{title}</h1>
        <div className='flex w-full overflow-x-clip '>
            <div className='flex flex-wrap md:flex-wrap sm:justify-center md:justify-center xl:justify-center'>
                {movies.map((e)=> <MovieCard key={e.id} posterPath={e.poster_path} original_title={e.original_title} />)}
            </div>
        </div>
    </div>
  )
}

export default MovieList;
