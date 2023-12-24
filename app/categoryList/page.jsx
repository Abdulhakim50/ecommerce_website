import React from 'react'
import { catagories } from '@/utils/Catagories'
import Image from 'next/image'

const page = () => {
  return (
 <>
        <div class="grid max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-5 max-sm:gap-2 items-center">

        {catagories.map((category)=>{
          
        
          return <div class="category-card bg-white overflow-hidden border border-gray-300 m-2 relative rounded-xl" key={category.label}>
        <Image src={category.img} width={200} height={200} alt='category image' class="object-cover w-full h-full" />
        <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
        <p>{category.label}</p>
        </div>
    </div>
         
          
        })}
        </div>
  </>
  )
}

export default page