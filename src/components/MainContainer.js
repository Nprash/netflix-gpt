import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

  const movies = useSelector(store=>store.movies?.nowPlayingMovies)
  //below is the eraly return to stop getting error if there is no data at initial stage in store or 
  if(movies === null) return; //this stop rendering when no movi list is available in store.bcz initailly movies list is null
  const mainMovie = movies[0]; //initally nowplayingmovies is null, after fetch will update the store with movies list if i console movies it throws error
  // console.log(mainMovie)
  const {original_title, overview ,id }= mainMovie;

  return (
    <div className='box-border md:pt-0 sm:pt-[10%] pt-[25%]  bg-black'>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id}/>

    </div>
)
}

export default MainContainer
