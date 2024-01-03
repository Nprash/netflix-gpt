
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {API_OPTIONS} from "../utilis/constants";
import { addTopratedMovies } from "../utilis/moviesSlice";


const useTopratedMovies = () =>{
    const dispatch = useDispatch();
    const topratedMovies = useSelector(store=>store.topratedMovies)
        
    useEffect(()=>{
      !topratedMovies && getTopratedMovies()
      //topratedMovies is not present in store then only it wil fetch from api
    },[])
  
    const getTopratedMovies = async () =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", 
      API_OPTIONS);
      const json = await data.json()
      //console.log(json.results) //remove strict mode at index.js, then console will show result only once
      //strict mode doesnt render two times at production level
      //but render twice in development level bcz it will check the code consistency integrity by rendering twice
      //whicle double rendering any errors found in rendering cycle throws eroor message
  
      dispatch(addTopratedMovies(json.results));
    }
}

export default useTopratedMovies;