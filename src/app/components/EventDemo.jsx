import React from 'react'

const EventDemo = () => {

  const display = () => {
    console.log("my event fire")
  }
  
  return (
    <div className='min-h-screen max-w-5xl justify-center mx-auto mt-20'>
      <button 
        onClick={display}
        className=" px-10 py-2 bg-blue-800 text-gray-50"
      >
        Event Management
      </button>
    </div>
  )
}

export default EventDemo
