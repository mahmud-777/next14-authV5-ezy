import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className='px-5 text-bold text-xl my-10'>
      <div className='flex flex-col gap-3'>
        <Link href={"/dashboard"} 
          className='border-b-[1px] border-gray-500
          hover:border-gray-900'
        >
          Dashboard
        </Link>
        <Link href={"/profile"} 
          className='border-b-[1px] border-gray-500
          hover:border-gray-900'
        >
          Profile
        </Link>
        <Link href={"/details"} 
          className='border-b-[1px] border-gray-500
          hover:border-gray-900'
        >
          Details
        </Link>
      </div>      
    </div>
  )
}
