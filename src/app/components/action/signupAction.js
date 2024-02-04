'use server'

import DBConnection from "@/app/lib/DBConnection"
import UserModel from "@/app/lib/models/UserModel"

export async function signupAction(formData){
  console.log(formData)
  try {
    await DBConnection()

    const res = await UserModel.create(formData);
    
  } catch (error) {
    console.log(error)
    
  }
}