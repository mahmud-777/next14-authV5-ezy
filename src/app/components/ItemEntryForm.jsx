'use client'
import ItemEntryAction from "./action/ItemEntryAction";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import SubmitButton from "./submitButton";

function ItemEntryForm() {

  const { 
    handleSubmit, register, 
    reset, formState:{errors}
  } = useForm()

  const handleEntryForm = async (formData) => {
    console.log(formData) ;
    const status = await ItemEntryAction(formData);

    if(status.success){
      toast.success("Item Inserted");
    }else{
      toast.error("Ooops something went wrong!")
    }
    reset();
  }

  return (
    <div className=' max-w-2xl mx-auto mt-20'> 
      <form action={handleSubmit(handleEntryForm)} >
        <div className=' flex flex-col gap-5'>
          <div className=' flex flex-col w-full'>
            <label >Enter Item Name</label>
            <input 
              className=' outline-none border border-green-400'
              type="text"
              {...register('itemName', { required: true})} 
            />
            {errors.itemName?.type == 'required' && (
              <p className=" text-red-600">Item Name is Required</p>
            )}
          </div>
          <div className=' flex flex-col w-full'>
            <label>Enter Item Price</label>
            <input 
              className=' outline-none border border-green-400'
              type="number"               
              {...register('price', { required: true})}
            />
            {errors.price?.type == 'required' && (
              <p className="text-red-600">Price is Required</p>
            )}
          </div>
          <div>
          {/* <button type="submit" className=' px-5 py-1 border border-orange-600'>
              ItemSave
            </button> */}
            <SubmitButton />
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  )
}

export default ItemEntryForm
