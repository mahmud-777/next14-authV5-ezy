import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import DBConnection from "./lib/DBConnection";
import UserModel from "./lib/models/UserModel";
import bcrypt from 'bcryptjs';

export const { 
  auth,
  signIn,
  handlers: { GET, POST }

} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET
    }),
    Credentials({
      name: "credentials",
      credentials: {
        username: { type: String, required: true},
        password: { type: String, required: true}
      },

      async authorize(credential) {
        // await DBConnection();
        // const user = await UserModel.findOne({ 
        //   username: credential?.username,
        //   // password: credential?.password
        // });
        // console.log(user)

        // if(user){
        //   const isMatch = bcrypt.compare(credential?.password, user.password)
        //   if(isMatch){
        //     return user;
        //   }return null;
        // }else
        // return null;

        const user = { 
          id: 100, name: "ezycode", 
          password: "admin", 
          role: "admin",
        }
        if(credential?.username == user.name && credential?.password == user.password){
          return user;
        }
        else
        return null;
      }
    }),
    
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    // signIn: "/login"
  },
  callbacks: {
    jwt: async({token, user})=> {
      if(user){        
       // return { ...token, ...user }

        token.name= user.name,
        //  token.name= user.username,
         token.role = "admin"
      }
      return token;
    },
    session: async({session, token})=>{
      if(token){
        session.user.name = token.name;
        session.user.role= token.role;

      }
      // if(session?.user){
      //   session.user.username= token.name
      //   session.user.role = token.role
      // }

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
    maxAge: 60*60*24*7  // 7 days
  }
});