import React from 'react'
import logo from '../assets/Netflix_Logo_RGB.png'

const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black py-2 px-2 z-10'>
        <img
            src={logo}
            alt='logo'
            className='w-40'
        />
    </div>
  )
}

export default Header