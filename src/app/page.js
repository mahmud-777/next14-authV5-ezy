import { redirect } from "next/navigation";
import { auth } from "./auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth()
  if(!session){
    redirect("/api/auth/signin");
  }
  console.log("Session homepage",session)
  return (
    
    <div className="max-w-xl mx-auto mt-20">
      <div className="text-4xl text-gray-800">
        {/* Welcome: {session.user.name} */}
        Welcome: {session?.user?.username}
      </div>
      <div className="text-2xl">
        Role: {session?.user?.role}

      </div>

      <Link href={"/api/auth/signout"}>Logout</Link>
    </div>
  );
}
