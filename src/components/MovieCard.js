import React from 'react'
import { IMG_CDN_URL } from '../utilis/constants'
// import Loader from './Loader';




const MovieCard = ({posterPath, original_title}) => {
  if(!posterPath) return ;
  return (
    <div className='md:w-48 lg:w-56 w-36 p-4 rounded-lg m-2'>
        
      <img alt="movie-card-imag" className="rounded-md md:h-60 sm:h-40" src={IMG_CDN_URL + posterPath}/>
      <div className='h-6 flex justify-center overflow-hidden box-border break-words'>
        <span className='text-gray-50'>{original_title}</span>
      </div>
    </div>
  )
}

export default MovieCard
