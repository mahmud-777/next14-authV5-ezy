import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"
import DBConnection from "./lib/DBConnection";
import UserModel from "./lib/models/UserModel";

export const { 
  auth,
  signIn,
  handlers: { GET, POST }

} = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      async authorize(credential) {
        await DBConnection();
        const user = await UserModel.findOne({ 
          username: credential?.username,
          password: credential?.password
        });
        console.log(user)

        if(!user){
          return null;
        }
        return user;
        // const user = { 
        //   id: 100, name: "ezycode", 
        //   password: "admin", 
        //   role: "admin",
        // }
        // if(credential?.username == user.name && credential?.password == user.password){
        //   return user;
        // }
        // else
        // return null;
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
        // token.name= user.name,
        token.name= user.username,
        token.role = "admin"  //user.role
      }
      return token;
    },
    session: async({session, token})=>{
      if(session?.user){
        session.user.username= token.name
        session.user.role = token.role
      }

      // if (session.user) {
      //   session.user.name = token.name;
      //   session.user.email = token.email;
      //   session.user.isOAuth = token.isOAuth as boolean;
      // }
      return session;

    }
  },
  session: {
    strategy: "jwt",
    // maxAge: 60*60*24*30
    maxAge: 60*60*24
  }
});