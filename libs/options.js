import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider  from "next-auth/providers/email"
import CredentialsProvider  from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
 import prisma from "@/libs/prisma"
import   bcrypt from "bcrypt"

export const authOptions={
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    CredentialsProvider ({
      name:'credentials',
      credentials:{
        email:{
            lable:"email",
            type:"text"
        },
        password:{
            label:"password",
            type:"password"
        }
      },
      async authorize(credentials){
        if(!credentials.email || !credentials.password ){
            throw new Error('invalid email or password')
        }
        const user=await prisma.user.findUnique({
            where:{
                email:credentials.email
            }
        })
        if(!user || !user?.hashedPassword){
            throw new Error('invalid email or password')
        }

            const isValidPass=await bcrypt.compare(
                credentials.password,
                user.hashedPassword
            )
            if(!isValidPass){
                throw new Error('not hashed')
            }
          return user;
      }
    }),
  ],
    pages:{
        signIn:'/login',
    },
    debug:process.env.NODE_ENV==="development",
    session:{
        strategy: 'jwt',

    },
    secret: process.env.NEXTAUTH_SECRET,
 
}
