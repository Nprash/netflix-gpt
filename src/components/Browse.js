import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'


const Browse = () => {
  //fetching movies data storing in redux, the line below is customhook
  useNowPlayingMovies()// here we did with custom hook for nowPlayingMovies;
  usePopularMovies()//drawn popular movies here to reneder further in moviList
  //fetching and storing is done above


  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
      
      main video container
        -video background
        -video title
      secondary container
        -categorised movilist
          -movie cards*N
      */}
    </div>


  )
}

export default Browse
