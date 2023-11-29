
'use client'
import React from 'react'
import { IoMdArrowDropright, IoMdHeartEmpty} from 'react-icons/Io'
import Catagory from './Catagory'
import { catagories } from '@/utils/Catagories'
import { usePathname, useSearchParams } from 'next/navigation'

const Catagories = () => {
  const params=useSearchParams()
  const catagory=params?.get('catagory')

  const pathname=usePathname()
  const isMainPage =pathname ==='/'

  if(!isMainPage) return null;
  return (
    <>
   
    <div className='mt-20 flex flex-col  max-md:hidden'>
     <p className=' font-extrabold mb-3'>Catagories
     </p>

    

 
  {catagories.map((item)=>{
        return  <Catagory
         item={item}
         label={item.label}
         icon={item.icon}
         selected={catagory===item.label ||  (catagory===null && item.label==='All')}
         />
})}
 
</div>

 
    {/* description */}
 
  
  </>
  )
}
  


export default Catagories