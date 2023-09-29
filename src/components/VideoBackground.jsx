import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = ({id}) => {

    const [trailer , setTrailer] = useState()

    useEffect(()=>{
        getMovieTrailer();
    } , [])

    const getMovieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos` , API_OPTIONS);
        const json = await data.json();
        
        const filterData = json.results.filter(video => video.type === "Trailer");
        setTrailer(filterData[0]);
        console.log(trailer);
    }


  return(!trailer)?null: (
    <div>
        <iframe 
            className='w-screen aspect-video h-fit'
            // width="560" 
            src={`https://www.youtube.com/embed/${trailer.key}?si=6rQZa-0uQ66JG81n?&autoplay=1&mute=1`}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoBackground