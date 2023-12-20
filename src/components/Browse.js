import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopratedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchPage from './GptSearchPage';
import {useSelector} from "react-redux";

const Browse = () => {
  const gptSearchEnable = useSelector((store)=>store.gpt.showGptSearch)
  //fetching movies data storing in redux, the line below is customhook
  useNowPlayingMovies()// here we did with custom hook for nowPlayingMovies;
  usePopularMovies()//drawn popular movies here to reneder further in moviList
  //fetching and storing is done above
  useTopratedMovies()
  useUpcomingMovies()


  return (
    <div>
      <Header />
      {
       gptSearchEnable ?(<GptSearchPage />) : (
       <>
        <MainContainer />
        <SecondaryContainer />
       </>)
      }
      
    
       
      
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
