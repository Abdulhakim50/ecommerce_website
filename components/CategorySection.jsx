import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const CategorySection = () => {
  return (
       <div>
        <h1 className='text-center font-bold'>Popular Categories</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ' >
           <div className='flex flex-col items-center justify-center'>
           <Image src='/hero2.webp' alt='' width={200} height={200}></Image>
            <Link href=''></Link>
            <div className='flex'>
            <Image src='/hero2.webp' alt='' width={200} height={200}></Image>
            <Link href=''></Link>
            <Image src='/hero2.webp' alt='' width={200} height={200}></Image>
            <Link href=''></Link>
       
            </div>
         
            </div>
            <div className='flex flex-col items-center justify-center'>
           <Image src='/hero2.webp' alt='' width={200} height={200}></Image>
            <Link href=''></Link>
            <div className='flex'>
            <Image src='/hero2.webp' alt='' width={200} height={200}></Image>
            <Link href=''></Link>
            <Image src='/hero2.webp' alt='' width={200} height={200}></Image>
            <Link href=''></Link>
       
            </div>
         
            </div>

            <div className='flex flex-col items-center justify-center'>
           <Image src='/hero2.webp' alt='' width={200} height={200}></Image>
            <Link href=''></Link>
            <div className='flex'>
            <Image src='/hero2.webp' alt='' width={200} height={200}></Image>
            <Link href=''></Link>
            <Image src='/hero2.webp' alt='' width={200} height={200}></Image>
            <Link href=''></Link>
       
            </div>
         
            </div>
            <div className='flex flex-col items-center justify-center'>
           <Image src='/hero2.webp' alt='' width={200} height={200}></Image>
            <Link href=''></Link>
            <div className='flex'>
            <Image src='/hero2.webp' alt='' width={200} height={200}></Image>
            <Link href=''></Link>
            <Image src='/hero2.webp' alt='' width={200} height={200}></Image>
            <Link href=''></Link>
       
            </div>
         
            </div>
    </div>
    </div>
  )
}

export default CategorySection