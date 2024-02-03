'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TiInfoOutline } from "react-icons/ti";
import { loginAction } from './action/loginAction';

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
    <div className=" max-w-lg mx-auto mt-20 bg-gray-800 rounded-lg min-h-[350px] p-10">
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
            Have no account? <Link className=' cursor-pointer' href={"/signup"}>Signup</Link>
          </span>
        </div>
      
    </div>
  )
}

export default LoginForm

