import React from 'react'
import { catagories } from '@/utils/Catagories'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        {catagories.map((category)=>{
          <div className='grid grid-cols-6  max-md:grid-cols-3 max-sm:grid-cols-2'>
            <Image src={category.img} width={200} height={200} alt='category image'>

                <p>{category.label}</p>
            </Image>
           
            
          </div>
        })}
    </div>
  )
}

export default page