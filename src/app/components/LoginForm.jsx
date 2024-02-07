'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TiInfoOutline } from "react-icons/ti";
import { loginAction } from './action/loginAction';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const LoginForm = () => {
  const { handleSubmit, register, reset, formState: { errors}} = useForm()
  const [errorMessage, setErrorMessage] = useState(null)

  const onSubmit = async(data) => {
    // console.log("Data : ",data);
    const res = await loginAction(data);
    
    setErrorMessage(res?.error);
    console.log("Response :", res);

  }

  return (
    <div className="max-w-sm mx-auto mt-20 bg-gray-800 rounded-lg min-h-[350px] p-10">
      {errorMessage && (
        <div className='bg-orange-600 p-1 justify-center items-center rounded-lg flex flex-row gap-3'>
          <span><TiInfoOutline /></span>
          <span>{errorMessage}</span>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='flex flex-col gap-2 w-full'>
          <label className='text-white'>User Name</label>
          <input 
          {...register('username', { required: true})}
          type="text" className='rounded-lg p-1' 
          />
          {errors.username?.type === 'required' && (
            <p className='text-yellow-600'>Username is required</p>
          )}
        </fieldset>
        <fieldset className='flex flex-col gap-2 w-full'>
          <label className='text-white'>Password</label>
          <input 
          {...register('password', { required: true})}
          type="text" className='rounded-lg p-1' 
          />
          {errors.password?.type === 'required' && (
            <p className='text-yellow-600'>Password is required</p>
          )}
        </fieldset>
        <fieldset className='flex flex-col gap-2 w-full'>
          <button type="submit" className='px-5 py-1 bg-blue-800 text-white rounded-lg my-5'>Login</button>

        </fieldset>
      </form>
      <div className='flex flex-col gap-2 w-full'>
          <span className='text-white'>
            Forgog your password? <Link className=' cursor-pointer' href={"/signup"}>Reset it here</Link>
          </span>
        </div>
      <div className="">
        <button
          type="button"
          className="w-full text-slate-950 bg-white hover:bg-slate-50 focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center flex items-center dark:focus:ring-slate-100 me-2 mb-4 border border-slate-200"
          onClick={() => signIn("google")}
        >
          <FaGoogle className="mr-2 text-red-600 w-4 h-4" />
          Sign in with Google
        </button>
        <button
          onClick={() => signIn("github")}
          type="button"
          className="w-full justify-center text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          {/* Icon */}
          <FaGithub className="mr-2 w-4 h-4" />
          Sign in with Github
        </button>
      </div>
      <div className='flex flex-col gap-2 w-full'>
          <span className='text-white'>
            Not yet registered? <Link className=' cursor-pointer' href={"/signup"}>Signup</Link>
          </span>
        </div>
      
    </div>
  )
}

export default LoginForm

