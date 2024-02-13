'use client'
import { useState } from "react";
import { useForm } from "react-hook-form"
import axios from "axios";


function ReactForm() {
  const [message, setMessage ] = useState("");
  const { register, handleSubmit, reset, formState: { errors}} = useForm();

  const onSubmit = async (formData) => {
    // console.log(formData);
    try {
      // await axios.get("/api/register").then((res) => {
      //   console.log(res);
      //   setMessage(res.data.message)
      // })
      await axios.post("/api/register", formData).then((res) => {
        console.log(res);
        setMessage(res.data.message)
      })
    } catch (error) {
      console.log(error)      
    }

  }
  return (
    <div className=' max-w-xl mx-auto mt-20 bg-blue-300'>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col border p-10 bg-cyan-700 ">
            <div className=" flex flex-col w-full my-2">
              <label>Email ID</label>
              <input 
                type="text" 
                {...register("email", { required: true})} 
                className=" px-2 py-1 outline-none border border-gray-400"
              />
              {
                errors.email?.type === "required" && (<p className="text-red-400">Email ID Required</p>)
              }
            </div>
            <div>
              <label>Password</label>
              <input 
                type="text" 
                {...register("password", { required: true, minLength:5})} 
                className=" px-2 py-1 outline-none border border-gray-400"
              />
              { errors.password?.type === "required" && (<p className="text-red-400">Password Required</p>) }
              {
                errors.password?.type == "minLength" && (<p>Minimum Length Required is 5 Character</p>)
              }
            </div>
            <div>
              <button type="submit"
                className="px-5 py-2 bg-orange-800 text-white mt-5"
              >Save</button>
            </div>
          </div>
          
        </form>
        <div>
          Status: { message }
        </div>
      </div>
    </div>
  )
}

export default ReactForm
