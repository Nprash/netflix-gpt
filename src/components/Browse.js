import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {
  //fetching movies data storing in redux, the line below is customhook
  useNowPlayingMovies()



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
