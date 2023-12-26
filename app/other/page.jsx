import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
   <>
<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
  <div className='bg-green-500'>
    abdulhaim
  </div>
 
  <div className='bg-red-500'>
    abdulaziz
  </div>

  <div className='bg-blue-500 md:col-span-2 lg:col-span-1'>
    nuredin
  </div>
</div>


   </>
  )
}

export default page