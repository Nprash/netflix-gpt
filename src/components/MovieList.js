import React from 'react'
import MovieCard from './MovieCard'




const MovieList = ({title, movies}) => {
  if(!movies) return null;
//bcz initially the store is nulll when these movies initialised thats why early retun null, after executing this line rest will render
  return (
    <div className='p-2 box-border'>
        <h1 className='text-2xl pb-3 text-white font-bold'>{title}</h1>
        <div className='flex w-full overflow-x-clip '>
            <div className='flex flex-wrap'>
                {movies.map((e)=> <MovieCard key={e.id} posterPath={e.poster_path} />)}
            </div>
        </div>
    </div>
  )
}

export default MovieList;
