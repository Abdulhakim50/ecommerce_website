'use client'
import React from 'react'
import ShowCartQty from './ShowCartQty'
import Link from 'next/link'
import Button from './Button'
import { useRouter } from 'next/navigation'


const FooterNav = ({currentUser}) => {
  const router =useRouter()
  
  return (
    <div className='fixed bottom-0 mt-[60px] w-full bg-green-500 h-[60px] flex justify-evenly md:hidden  radd '>
   

  <Link href='/'>
  <div className='flex flex-col items-center mt-3'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
 <p className='text-white text-sm'>Home</p>
 </div>
  </Link>



<div className='flex flex-col text-center items-center  mt-2'>
  <Link href='/cart'>

  <ShowCartQty className="w-7 h-7 text-white font-black " Qty=" absolute top-[-2px] right-[-0px] text-white bg-green-950 h-3 w-3 rounded-full  flex item-center justify-center text-[10px]" />
        <p className='text-white text-sm'>Cart</p>
  </Link>
        </div>
       <Link href='/categoryList'>
       <div className='flex flex-col items-center mt-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

 <p className='text-white text-sm'>Category</p>
</div>
       </Link>
       
  
<div className="dropdown dropdown-top">
          <div className='flex flex-col items-center'>
       
<div tabIndex={0} role="button" className="">   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white mt-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg></div>
        <div className=' text-sm text-white'>Account</div>
          </div>
       
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-20 raddd">
          {!currentUser?(
            <>
              <li ><Link href="/login">SignIn</Link></li>
              <li ><Link href="/register">SignUp</Link></li>
            </>
          ):(
      <>
        <li><Button/></li>
        <li><a>View Orders</a></li>
      </>

          )}
       
      
       </ul>
    </div>

    
        
 
      </div>

  )
}

export default FooterNav