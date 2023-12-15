import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {
  // const [trailerid, setTrailerid] = useState(null);
  //getting trailervideo from store which was sent to the store by useTrailerVideo custom hook
  useMovieTrailer(movieId) //passing movieid based on this id it will fetch the movie trailer
  const trailerVideo = useSelector(store=>store.movies?.trailerVideo)

  
  return (
    <div className="w-screen ">
     <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1&controls=0"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
