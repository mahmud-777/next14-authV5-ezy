"use server"

import { signIn } from "@/app/auth"
import { AuthError } from "next-auth";

export async function loginAction(formData){
 
  try {
    //console.log(formData)
    await signIn("credentials", {
      username: formData.username,
      password: formData.password,
      redirectTo: "/",
    });
    
  } catch (error) {
    // console.log(error)
    if(error instanceof AuthError){
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        case "CallbackRouteError":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something Went Wrong" };
      }
      
    }
    throw error;
  }
}