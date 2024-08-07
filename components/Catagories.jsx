
'use client'
import React from 'react'

import Catagory from './Catagory'
import { catagories } from '@/utils/Catagories'
import { usePathname, useSearchParams } from 'next/navigation'

import clsx from 'clsx';

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { heroSlider } from '@/utils/heroSlider'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Catagories = () => {
  const params=useSearchParams()
  const catagory=params?.get('catagory')
  const router =useRouter()

  const pathname=usePathname()
  const isMainPage =pathname ==='/'

  if(!isMainPage) return null;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 4000,
    
  };

  return (
    <>
   
  

 
    {/* description */}
 
    <div className='w-full bg-green-500 h-[60px] mt-5 max-sm:hidden  '>
    <div className='flex justify-evenly gap-0 '>
  
    <div className='flex gap-10 mt-5 '>
    <Link href='/'  className={clsx(
              '  ',
              {
                'bg-white px-2 rounded-s-sm text-green-700 font-semibold': pathname === '/',
              },
            )}>Home</Link>
      <Link href='/search'   className={clsx(
              ' text-white font-semibold ',
              {
                'bg-sky-100 text-blue-600': pathname === '/search',
              },
            )}
          >Products</Link>
      <Link href='/categoryList' className='text-white font-semibold'>Categories</Link>
    </div>
      
    </div>
    </div>
    
     <div className='flex justify-evenly hro bg-no-repeat mt-0px w-full bg-gray-400 max-sm:hidden '>

      <div className='  bg-white h-[600px] w-[300px]  flex flex-col  relative top-[-60px] max-[1019px]:hidden'>
      <div className=' p-3 flex gap-3 items-center  '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        <p className=' text-2xl font-extrabold text-green-500'>Catagories</p>
      
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

      <div className='flex flex-col gap-10 mt-10 items-center ' >
        <div>
        <p className=' text-5xl font-bold  text-green-700'>
Discover the Art of Elegance</p>
        
        </div>
     <div className='max-w-[700px] '>
      <Slider {...sliderSettings}>
        {heroSlider.map((hero)=>(
            <p key={hero.label} className='w-[100%]  line text-green-500 italic bg-white p-5 text-2xl  rounded-lg text-center font-extrabold'>{hero.label}</p>
        ))}
        </Slider>
         </div>
       <Link href='/login'  className='bg-green-500 text-white p-3 hover:bg-green-900 '>Shop Now</Link>
    
      </div>
     </div>
      
  </>
  )
}
  


export default Catagories
