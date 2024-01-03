import React from 'react'
import { IMG_CDN_URL } from '../utilis/constants'




const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-48 p-4'>
      <img alt="movie-card-imag" src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard
