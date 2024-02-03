'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TiInfoOutline } from "react-icons/ti";

const SignupForm = () => {
  const { handleSubmit, register, reset, formState: { errors}} = useForm()
  const [errorMessage, setErrorMessage] = useState("")

  const onSubmit = (data) => {
    console.log(data);

  }

  return (
    <div className="max-w-sm mx-auto mt-20 bg-gray-800 rounded-lg min-h-[350px] p-10">
      {errorMessage && (
        <div>
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
          <label className='text-white'>Email </label>
          <input 
          {...register('email', { required: true})}
          type="text" className='rounded-lg p-1' 
          />
          {errors.email?.type === 'required' && (
            <p className='text-yellow-600'>Email is required</p>
          )}
        </fieldset>
        <fieldset className='flex flex-col gap-2 w-full'>
          <label className='text-white'>Password</label>
          <input 
          {...register('password', { required: true})}
          type="password" className='rounded-lg p-1' 
          />
          {errors.password?.type === 'required' && (
            <p className='text-yellow-600'>Password is required</p>
          )}
        </fieldset>
        <fieldset className='flex flex-col gap-2 w-full'>
          <button type="submit" className='px-5 py-1 bg-blue-800 text-white rounded-lg my-5'>Signup</button>

        </fieldset>
        <fieldset className='flex flex-col gap-2 w-full'>
          <span>
            Have an account? <Link href={"/login"}>Login</Link>
          </span>
        </fieldset>

      </form>
      
    </div>
  )
}

export default SignupForm

