
'use client'
import React from 'react'
import { catagories } from '@/utils/Catagories'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const page = () => {
const router=useRouter()
  return (
 <>     
       <div className='text-center font-bold text-3xl mt-5'>Categories</div>
       <div class="grid max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-5 max-sm:gap-2 items-center mt-20 mb-20">
  {catagories.map((category) => (
    <div class="category-card bg-white overflow-hidden border border-gray-300 m-2 relative rounded-xl w-full" key={category.label} onClick={()=>router.push(`/categoryPage?category=${category.label}`)}>
      <Image src={category.img} width={200} height={300} alt="category image" class="object-fit w-full h-[200px] " />
      <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
        <p>{category.label}</p>
      </div>
    </div>
  ))}
</div>

  </>
  )
}

export default page