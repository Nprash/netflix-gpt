import { useEffect } from "react";    
import {useDispatch, useSelector} from "react-redux"
import { addTrailerVideo } from "../utilis/moviesSlice";    
import {API_OPTIONS} from "../utilis/constants"



const useMovieTrailer = (movieId) =>  {

    const dispatch = useDispatch();
    const trailerVideo = useSelector(store=>store.trailerVideo)

    // fetch trailer video, need to make API call from videos in tmdb
    const getMovieVideos = async () =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
    const json = await data.json()
    // console.log(json.results)
    // console.log(API_OPTIONS);


    const filtertrailer = json.results.filter((video)=>(video.type === "Trailer"));
    //if there is no trailer in filter we will go json.results[0] whatever the video it is , it will take
    const trailer =filtertrailer.leangth ? filtertrailer[0] : json.results[0]
    // setTrailerid(trailer.key)
    // console.log(filtertrailer)
    // console.log(trailer)
    dispatch(addTrailerVideo(trailer))
  
    };
    // if(!getMovieVideos) return;
    useEffect(()=>{
      if(!trailerVideo)
      getMovieVideos() // if trailerVideo is not present in store then only it will fetch
    },[])

}

export default useMovieTrailer;