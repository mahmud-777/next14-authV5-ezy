'use client'
import { useState } from "react";
export default function FormValidation() {
  const [userName, setUserName] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [isValidLength, setIsValidLength] = useState(true);


  const handleForm = (e) => {
    e.preventDefault();
    // console.log("Form Submitted",e);
    console.log("userName", userName, " mobile :", mobile)
    if(!userName || !mobile){
      console.log("Invalid Form")
    }else{
      console.log("Form is valid")
    }
  }

  const handleUserName = (e) => {
    let username = e.target.value;
    if(username.length>0 && username.length<=4){
      setIsValidLength(false)
    }else{
      setIsValidLength(true);
      setUserName(username)
    }
  }

  const handleMobile = (e) => {
    let mobile = e.target.value;
    if(mobile.length>0 && mobile.length<=10){
      setIsValidLength(false)
    }else{
      setIsValidLength(true);
      setMobile(mobile)
    }
  }
  
  return (
    <div className='max-w-4xl mx-auto mt-20 bg-cyan-500 p-10 min-h-[400px]'>
       <form onSubmit={handleForm}>
        <div className=' flex flex-col justify-between px-10 py-5'>
          <label>User name</label>
          <input type="text" className="px-3 py-1 outline-none appearance-none border border-blue-600 rounded-lg" id="username" onChange={handleUserName} />
          {/* error message */}
          {
            !isValidLength && <p className="pt-1 text-[#003366]">Minimum Length Required is 5</p>
          }
        </div>
        <div className=' flex flex-col justify-between px-10 py-5'>
          <label>Mobile Number</label>
          <input type="text" className="px-3 py-1 outline-none appearance-none border border-blue-600 rounded-lg" id="mobile" onChange={(e) => setMobile(handleMobile)} />
          {/* {
            !isValidLength && <p>Minimum Length Required is 5</p>
          } */}
        </div>
        <div className=' mt-10 flex justify-center items-center'>
          <button type="submit" className='px-10 py-2 bg-orange-600'>Submit Form</button>
        </div>

       </form>
    </div>
  )
}
