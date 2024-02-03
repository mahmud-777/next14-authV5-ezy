import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"

export const { 
  auth,
  signIn,
  handlers: { GET, POST }

} = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      async authorize(credential) {
        const user = { 
          id: 100, name: "ezycode", 
          password: "admin", 
          role: "user",
        }
        if(credential?.username == user.name && credential?.password == user.password){
          return user;
        }
        else
        return null;
      }
    })
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login"
  },
  callbacks: {
    jwt: async({token, user})=> {
      if(user){
        token.name= user.name,
        token.role = user.role
      }
      return token;
    },
    session: async({session, token})=>{
      if(session?.user){
        session.user.role = token.role
      }
      return session;

    }
  }
});