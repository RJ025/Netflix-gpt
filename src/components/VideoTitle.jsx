import React from 'react'

const VideoTitle = ({title , description}) => {
  return (
    <div className='pt-[20%] px-24 absolute bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='font-bold text-5xl text-white'>{title}</h1>
        <p className='text-lg w-3/5 py-5  text-white'>{description}</p>
        <div className='flex flex-row gap-2' >
            <button className='text-black font-semibold bg-white p-2 border w-1/4 border-black'>Play</button>
            <button className='text-white font-semibold bg-gray-400 p-2 border w-1/4 border-black'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle