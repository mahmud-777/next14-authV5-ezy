"use client"
import React, { useState} from 'react'
import axios from 'axios'

function RegisterComponent() {
  const [result, setResult] = useState("");

  const handleGet = async () => {
    console.log("Get Request");
    await axios.get("/api/register").then(res => {
      console.log(res.data);
      setResult(res.data.message);
    })
  }

  const handlePost = async () => {
    console.log("Post Request");
    await axios.post("/api/register", { userName:"Ezycode"}).then(res => {
      console.log(res.data);
      setResult(res.data.message);
    })
  };

  const handleDelete = async () => {
    console.log("Delete Request")
    await axios.delete("/api/register", { data: { roll: "911"}}).then((res) => {
      console.log(res.data);
      setResult(res.data.message)
    })
  }

  return (
    <div className=' max-w-4xl mx-auto mt-20 bg-blue-100'>

      Register
      <div>
        <button onClick={handleGet} className=' px-5 py-2 bg-green-500 text-gray-50 mx-3'>
          Get
        </button>
        <button onClick={handlePost} className=' px-5 py-2 bg-green-500 text-gray-50 mx-3'>
          Post
        </button>
        <button className=' px-5 py-2 bg-green-500 text-gray-50 mx-3'>
          Put
        </button>
        <button onClick={handleDelete} className=' px-5 py-2 bg-green-500 text-gray-50 mx-3'>
          Delete
        </button>
        <button className=' px-5 py-2 bg-green-500 text-gray-50 mx-3'>
          Patch
        </button>
      </div>
      <div>
        <h1>I have request {result }</h1>
      </div>
    </div>
  )
}

export default RegisterComponent
