'use client'
import React from 'react'
import ShowCartQty from './ShowCartQty'


const FooterNav = () => {
  
  return (
    <div className='fixed bottom-0 w-full bg-green-500 h-[50px] flex justify-evenly md:hidden gap-20 radd '>
   
<div className='flex flex-col items-center'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
 <p className='text-white text-sm'>Home</p>
</div>

<div className='flex flex-col text-center items-center  '>
        <ShowCartQty className="w-7 h-7 text-white font-black " Qty=" absolute top-[-2px] right-[-0px] text-white bg-green-950 h-3 w-3 rounded-full  flex item-center justify-center text-[10px]"/>
        <p className='text-white text-sm'>Cart</p>
        </div>

        <div className='flex flex-col items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

 <p className='text-white text-sm'>Category</p>
</div>
      </div>

  )
}

export default FooterNav