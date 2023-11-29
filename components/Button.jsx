"use client"

import React from 'react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

const Button = () => {
   const router=useRouter()
   
    
  return (
    

  <button onClick={()=>{
    signOut()
  }}><Link href="/login">Logout</Link></button>
 
  )
}


export default Button