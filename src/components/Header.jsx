import React, { useState } from 'react'
import logo from '../assets/Netflix_Logo_RGB.png'
import userIcon from '../assets/undefined - Imgur.png'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const Header = () => {

  const user = useSelector(store => store.user)

  const navigate = useNavigate();

  const handleSignout = ()=>{
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <div className='absolute w-screen bg-gradient-to-b from-black py-2 px-2 z-10 flex justify-between'>
        <img
            src={logo}
            alt='logo'
            className='w-40'
        />
        {(user) && <div className='flex gap-3 items-center'>
          <img
            src={userIcon}
            alt='userIcon'
            className='w-12 h-12 rounded-lg'
          />
          <button onClick={()=>handleSignout()} className='text-lg font-bold'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header