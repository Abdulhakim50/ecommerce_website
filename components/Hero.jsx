import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <div className="flex max-sm:flex-col  ">
        <div className>
    <div className=' mt-20'>
    <Image 
    src="/hero.jpg"
    width={800}
    height={100}
    className='max-sm:w-[300px]'
    alt='image'
    />
    <div className="flex gap-3 mt-3 justify-center">
    <Image 
    src="/hero.jpg"
    width={250}
    height={50}
    className=' rounded-md h-32'
    alt='image'
    />
     <Image 
    src="/hero.jpg"
    width={250}
    height={50}
    className=' rounded-md'
    alt='image'
    />
     <Image 
    src="/hero.jpg"
    width={250}
    height={50}
    className=' rounded-md'
    alt='image'
    /> 
    </div>
    </div>
    </div>
    <div>
         <div className=" grid gap-2 mt-20 ml-3">
    <div className=" bg-neutral rounded-md w-72 h-20 p-5 drop-shadow-2xl font-extrabold text-lg text-green-700 text-center">Fast Delivery</div>
    <div className=" bg-neutral rounded-md w-72 h-20 p-5 drop-shadow-2xl font-extrabold text-lg text-green-700 text-center">Mony back gurantee</div>
    <div className=" bg-neutral rounded-md w-72 h-20 p-5 drop-shadow-2xl font-extrabold text-lg text-green-700 text-center">Quality guarantee</div>
    <div className=" bg-neutral rounded-md w-72 h-20 p-5 drop-shadow-2xl font-extrabold text-lg text-green-700 text-center">Easy Order</div>
  </div>
    </div>
    </div>
    </>
  )
}

export default Hero