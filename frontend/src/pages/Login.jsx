import React,{useState} from 'react'
import { Form } from 'react-router-dom';

const Login = () => {
  const [currState,setCurrState]=useState('Login');
  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currState==='Login' ? null : <input type="text" placeholder='Name' className='w-full border border-gray-800 rounded px-3 py-2' />}
      <input type="email" placeholder='Email' className='w-full border border-gray-800 rounded px-3 py-2' />
      <input type="password" placeholder='Password' className='w-full border border-gray-800 rounded px-3 py-2' />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot password?</p>
        {currState==='Login' ? 
        <p onClick={()=>setCurrState('Sign Up')} className='cursor-pointer'>Create an account</p> : 
        <p onClick={()=>setCurrState('Login')} className='cursor-pointer'>Login Here</p>}
      </div>
      <button className='bg-black text-white font-light cursor-pointer mt-4 px-8 py-2'>{currState==='Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login