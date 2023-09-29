import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        getNowPlayingMovies();
    } , [])

    const getNowPlayingMovies = async() => {
    try {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }
    catch{err=>console.log(err)}
    }
}