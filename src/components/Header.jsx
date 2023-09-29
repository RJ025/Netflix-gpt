import React, { useEffect, useState } from 'react'
import logo from '../assets/Netflix_Logo_RGB.png'
import userIcon from '../assets/undefined - Imgur.png'
import { onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Header = () => {

  const user = useSelector(store => store.user)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignout = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      throw error;
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid , email , displayName} = user;
          dispatch(addUser({uid , email , displayName}));
          navigate('/browse')
        } else {
            dispatch(removeUser({}))
            navigate('/')
        }
      });

      return ()=>unsubscribe();
  } , [auth])


  return (
    <div className='absolute w-screen bg-gradient-to-b from-black py-2 px-2 z-10 flex justify-between'>
        <img
            src={logo}
            alt='logo'
            className='w-40'
        />
        {(user) &&
          <div>
            <div className='flex gap-3 items-center'>
              <img
                src={userIcon}
                alt='userIcon'
                className='w-12 h-12 rounded-lg'
              />
              <button onClick={()=>handleSignout()} className='text-lg font-bold text-white'>Sign Out</button>
            </div>
            {/* <div>
              <div className='absolute w-1/2 cursor-pointer flex  flex-col items-start'>
                <label for="img" className='cursor-pointer'>Change Avatar</label>
                <input type="file" id="img" name="img" accept="image/*" hidden onChange={(e)=>handleChange(e)}/>
                <h3>Remove Avatar</h3>
              </div>
            </div> */}
          </div> }
    </div>
  )
}

export default Header