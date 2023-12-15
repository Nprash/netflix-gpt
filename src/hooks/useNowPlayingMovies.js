
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import {API_OPTIONS} from "../utilis/constants"
import { addNowPlayingMovies } from "../utilis/moviesSlice"


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{getNowPlayingMovies()},[])
  
    const getNowPlayingMovies = async () =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?&page=1", 
      API_OPTIONS);
      const json = await data.json()
      //console.log(json.results) //remove strict mode at index.js, then console will show result only once
      //strict mode doesnt render two times at production level
      //but render twice in development level bcz it will check the code consistency integrity by rendering twice
      //whicle double rendering any errors found in rendering cycle throws eroor message
  
      dispatch(addNowPlayingMovies(json.results));
    }
}

export default useNowPlayingMovies;