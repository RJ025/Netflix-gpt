import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const [isSignIn , setIsSignIn] = useState(true);
    const [errorMessage  , setErrorMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleSubmit = () => {
        const message = checkValidData(email.current.value , password.current.value);
        setErrorMessage(message);
        if(message)return;
        
        // signIn signnup logic
        if(!isSignIn) {
            // signUp logic
            createUserWithEmailAndPassword(auth , email.current.value , password.current.value)
                .then((userCredential)=>{
                    const user = userCredential.user
                    updateProfile(user, {
                        displayName: name.current.value
                      }).then(() => {
                        const {uid , email , displayName} = auth.currentUser;
                        dispatch(addUser({uid , email , displayName}));
                      }).catch((error) => {
                        throw error
                      });
                    
                    console.log(user);
                })
                .catch((err)=>setErrorMessage(err.message))
        }
        else {
            // signin logic
            signInWithEmailAndPassword(auth, email.current.value , password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });

        }
    }

  return (
    <div>
        <Header/>
        <img
            src='https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg'
            alt='bg'
            className='absolute w-full h-full bg-cover'
        />
        <h1 className='text-lg font-bold text-white'>Sign In</h1>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute p-6 sm:p-5 sm:h-fit w-fit sm:w-3/12 top-1/4  left-10 right-20 sm:top-24 flex flex-col items-center sm:left-1/3 bg-neutral-900 rounded-lg bg-opacity-80'>
            <h1 className='text-lg font-bold text-white p-4'>{(isSignIn) ? "Sign In" : "Sign Up"}</h1>
            <input 
                ref={email}
                type='email' 
                placeholder='email address' 
                className='mb-6 p-2 bg-gray-700 text-white rounded-lg border-0' 
            />
            {!isSignIn && <input 
                type='text' 
                placeholder='full name' 
                ref={name}
                className='p-2 bg-gray-700 text-white rounded-lg mb-6'
            />}
            <input 
                ref={password}
                type='password' 
                placeholder='password' 
                className='p-2 bg-gray-700 text-white rounded-lg'
            />
            <p className='text-red-500'>{errorMessage}</p>
            <button type='submit' className='p-2 rounded-xl bg-red-700 text-white my-8 w-[200px] text-xl' onClick={()=>handleSubmit()}>{(isSignIn) ? "Sign In" : "Sign Up"}</button>
            <h1 className='text-sm text-white p-2'>{(isSignIn) ? "New To Netflix-Gpt?" : "Already a user"} </h1>
            <h1 className='text-sm  cursor-pointer text-red-500' onClick={()=>setIsSignIn(!isSignIn)} >{(isSignIn) ? "Sign Up Now" : "Sign In Now"}</h1>
        </form>
    </div>
  )
}

export default Login