
import { auth } from '@/app/auth'
import { redirect } from 'next/navigation';
import React from 'react'

async function SettingsPage() {
  const session = await auth();
  if(!session){
    redirect("/api/auth/signin");
  }
  return (
    <div>
      {
        session.user.role == "admin" ? 
        (<p>Authorized User</p>)
        :(<p>You are logged in but not authorized to view this page</p>)
      }
    </div>
  )
}

export default SettingsPage
