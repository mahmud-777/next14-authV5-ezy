'use server'

import DBConnection from "@/app/lib/DBConnection"
import UserModel from "@/app/lib/models/UserModel"
import bcrypt from 'bcryptjs'

export async function signupAction(formData){
  console.log(formData)
  try {
    await DBConnection()

    const {username, email, password } = formData;
    const hashedPassword = await bcrypt.hash(password, 10);

    const res = await UserModel.create({
      username: username, email: email, password: hashedPassword
    });
    
  } catch (error) {
    console.log(error)
    
  }
}