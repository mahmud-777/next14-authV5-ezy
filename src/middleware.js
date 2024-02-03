import { auth } from "./app/auth"

export default auth((req) => {
  // req.auth
  // logic
  const isLoggedIn = !!req.auth;
  const { nextUrl} = req; 
  
  if(nextUrl.pathname == "/login") return null;
  if(!isLoggedIn && nextUrl.pathname !== "/login"){
    return Response.redirect(new URL("/login", nextUrl))
  }
  
  console.log("LoggedIn : ", isLoggedIn)

  // console.log("Middleware called", req.nextUrl.pathname)
  // console.log("Current Route :", req.nextUrl.pathname)
})

export const config = {
  // matcher: ["/dashboard", "/profile"]
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}


