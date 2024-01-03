
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {API_OPTIONS} from "../utilis/constants"
import { addUpcomingMovies } from "../utilis/moviesSlice"


const useUpcomingMovies = () =>{
    const dispatch = useDispatch();
    const upComingMovies = useSelector(store=>store.upComingMovies)

    useEffect(()=>{
      !upComingMovies &&
      getUpcomingMovies() // upComingMovies is not present in store then only it will fetch
    },[])
  
    const getUpcomingMovies = async () =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", 
      API_OPTIONS);
      const json = await data.json()
      // console.log(json.results) //remove strict mode at index.js, then console will show result only once
      //strict mode doesnt render two times at production level
      //but render twice in development level bcz it will check the code consistency integrity by rendering twice
      //whicle double rendering any errors found in rendering cycle throws eroor message
  
      dispatch(addUpcomingMovies(json.results));
    }
}

export default useUpcomingMovies;