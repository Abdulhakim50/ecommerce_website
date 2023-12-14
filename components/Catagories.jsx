
'use client'
import React from 'react'

import Catagory from './Catagory'
import { catagories } from '@/utils/Catagories'
import { usePathname, useSearchParams } from 'next/navigation'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
const Catagories = () => {
  const params=useSearchParams()
  const catagory=params?.get('catagory')
  const router =useRouter()

  const pathname=usePathname()
  const isMainPage =pathname ==='/'

  if(!isMainPage) return null;
  return (
    <>
   
  

 
    {/* description */}
 
    <div className='w-full bg-green-500 h-[60px] mt-5  '>
    <div className='flex justify-evenly gap-0 '>
  
    <div className='flex gap-4 mt-5 '>
    <div>Home</div>
      <Link href='/search'>Products</Link>
      <div>Contact Us</div>
    </div>
      
    </div>
    </div>
    
     <div className='flex justify-evenly hro bg-no-repeat mt-0px w-full bg-gray-400 '>

      <div className='  bg-white h-[600px] w-[300px]  flex flex-col  relative top-[-60px] max-[1019px]:hidden'>
      <div className=' p-3 flex gap-3 items-center  '>
        <div className='text-2xl text-green-500'>menu</div>
        <p className=' text-2xl font-extrabold text-green-500'>CATEGORIES</p>
      
      </div> 
      <div className=' '>
        <div>
      {catagories.map((item)=>{
        return  <Catagory
         item={item}
         label={item.label}
         icon={item.icon}
         selected={catagory===item.label ||  (catagory===null && item.label==='All')}
         key={item.label}
         />
})}
</div>
 
      
      </div>
      </div>

      <div className='flex flex-col gap-10 mt-10 ' >
        <div>
       <p className=' text-lg font-bold'>UP TO 50% OFF</p>
        <p className=' text-5xl font-bold  text-green-700'>Shirt For Man</p>
        
        </div>
        <p className='  line'>Maboriosam in a nesciung eget magnae
dapibus disting tloctio in the find it pereri
odiy maboriosm.</p>
       <button>Shop Now</button>
      </div>
     </div>
      
  </>
  )
}
  


export default Catagories