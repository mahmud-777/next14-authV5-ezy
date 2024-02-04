import { auth } from '@/app/auth';
import React from 'react'

const ProfilePage = async () => {
  const session = await auth();
  if(!session){
    redirect("/api/auth/signin");
  }
  console.log("Session homepage",session)
  return (
    <div>
      Profile Page
    </div>
  )
}

export default ProfilePage
