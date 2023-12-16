'use client'


import Link from 'next/link'

import Button from './Button'
import ShowCartQty from './ShowCartQty'

import  { useState,useEffect } from 'react';
import { catagories } from '@/utils/Catagories'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'
import { useCart } from '@/hooks/useCart'


const Nav = ({currentUser}) => {
    const {openn,setOpenn}=useCart()
  const [open, setopen] = useState(false)
  const [ope, setope] = useState(false)
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
   const router =useRouter()

  const handle=()=>{
    setopen(!open)
   }
   const handles=()=>{
    setope(!ope)
   }


  
   const handleInput = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
   
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    return params
  
  }, 300);

   const handleSearch =()=>{
    const params= handleInput();
    replace(`/search?${params.toString()}`);
   }


  return (
    <>
  
      <div className='flex items-center justify-evenly pt-10' >
        <div className='md:hidden text-3xl ' onClick={handles}>
        <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className=""> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
 </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
    <ul className="menu p-4 w-64 min-h-full  bg-black opacity-72  text-base-content ">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>
       
        </div>
     
      <div className='text-green-500 font-bold max-sm:text-xl'>
        <p className='text-3xl max-sm:text-xl'>ethiomarket<spn className='text-black font-medium opacity-40'>.com</spn></p>
      </div> 
     
      <div className='flex border border-green-500  max-lg:border-none'>
        <div className='max-md:hidden'>
       <select className=' border-none h-[60px] px-10 text-green-500 '   
    
        >
          {catagories.map((category)=>(
              <option onClick={()=>router.push(`categoryPage/${category.label.toLowerCase()}`)} key={category.label} value={category.label} className='text-green-500'>{category.label}</option>
          ))}
      
      
       </select>
        </div>
        <div className="h-8 w-[1px] bg-gray-300 mt-3 ml-[15px] max-lg:hidden "></div>
      
       
        <div className='flex  max-lg:relative'>
         <input type="text" placeholder='what are you looking for?'
           className={` text-black border-l-0  ml-1 px-20  
           ${open? 'max-lg:absolute max-lg:top-[60px] max-lg:left-[-220px] max-lg:w-[500px] max-sm:w-[400px] max-sm:w-[400px] max-sm:left-[-150px] max-lg:border max-lg:border-green-500 max-lg:px-[10px] max-lg:py-[10px] max-lg:rounded-full transform translate-y-4 translate-y-0 transition duration-500 ease-in-out ':'max-lg:hidden'} `}    onChange={(e) => {
            handleInput(e.target.value);
          }}    defaultValue={searchParams.get('query')?.toString()}/>

         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`lg:hidden ${open? 'max-lg:absolute max-lg:top-[70px] max-lg:left-[250px] max-sm:left-[220px] text-2xl': 'max-lg:hidden'}`}  onClick={handle}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

       
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=' md:bg-green-600 w-[100px] h-[60px] max-sm:w-[20px] h-[20px]  text-white  max-lg:text-green-500 max-lg:text-xl' onClick={handleSearch}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

         </div>
         <div className='search-results'>
        {/* Display search results here */}
       
      </div>
    
      </div>
      <div className='flex gap-7  max-md:hidden'> 
      <div className='flex flex-col text-center items-center '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=' font-normal text-4xl text-green-500'>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

     
        <div className=' text-sm'>Wishlist</div>
        </div>
      <div className='flex flex-col text-center items-center '>
        <ShowCartQty className="w-12 h-12 text-green-500" Qty=" absolute top-[-2px] right-[-0px] text-white bg-green-950 h-4 w-4 rounded-full  flex item-center justify-center text-xs"/>
        <p className=' text-sm'>Cart</p>
        </div>
        
         
        <div className="dropdown dropdown-hover  ">
          <div className='flex flex-col items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-green-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

          <p className='text-4xl'></p>
        
        <div className=' text-sm'>Account</div>
          </div>
       
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
          {!currentUser?(
            <>
              <li ><Link href="/login">SignIn</Link></li>
              <li ><Link href="/register">SignUp</Link></li>
            </>
          ):(
      <>
        <li><Button/></li>
        <li><a>View Orders</a></li>
      </>

          )}
       
      
       </ul>
    </div>

    
        
      </div>
    </div>
    </>
  )
}

export default Nav
