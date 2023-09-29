import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies)
    if(nowPlayingMovies===null)return;

    const mainMovie = nowPlayingMovies[0];
    console.log(mainMovie);


  return (
    <div>
        <VideoTitle title={mainMovie.title} description = {mainMovie.overview}/>
        <VideoBackground id={mainMovie.id}/>
    </div>
  )
}

export default MainContainer