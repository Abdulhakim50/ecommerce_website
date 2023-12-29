'use client'


import Link from 'next/link'

import Button from './Button'
import ShowCartQty from './ShowCartQty'

import  { useState,useEffect } from 'react';
import { catagories } from '@/utils/Catagories'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'
import { useCart } from '@/hooks/useCart'
import ShowWishListQty from './ShowWishListQty';
import Image from 'next/image';



const Nav = ({currentUser}) => {
    const {openn,setOpenn}=useCart()
  const [open, setopen] = useState(false)
  const [searchOpen, setsearchOpen] = useState(false)
  const [ope, setope] = useState(false)
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
   const router =useRouter()



  const handle=()=>{
    setopen(!open)
   }
   

   const handleSearchOpen=()=>{
    setsearchOpen(!searchOpen)
   }
   
  
   const handleInput = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
   
    const params = new URLSearchParams(searchParams)
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    return params

  
  
  }, 300);

   const handleSearch =()=>{
    const params= handleInput();
    if(params){
    replace(`/search?${params.toString()}`);
    }
   }


  
  

  return (
    <>
     <div className='flex flex-col'>
      <div className='flex  items-center justify-evenly pt-3 ' >

        


       
        <div class=" md:hidden mt-2 ">
   <button class="text-black font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-3xl" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example"  >
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
   </button>
</div>
 <div id="drawer-example" class="fixed top-0 left-0 z-40 h-screen bg-[#333333]  p-4 overflow-y-auto transition-transform -translate-x-full  w-80  items-center  " tabindex="-1" aria-labelledby="drawer-label">
   <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>ethiomarket</h5>
   <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
   </button>
   <div className='flex flex-col gap-5'>
   <div className="text-white text-center">
  <p className="text-white text-center">Welcome {currentUser?.name}</p>
</div>

<div className="flex items-center justify-center">
  <input
    type="text"
    className="border border-white bg-[#333333] text-white px-5 py-2 rounded-l-lg focus:outline-none"
    placeholder="What are you looking for?"
    
    onChange={(e) => handleInput(e.target.value)}
    defaultValue={searchParams.get('query')?.toString()}
  />
  <button
    className="bg-green-600 px-4 py-2 text-white rounded-r-lg hover:bg-green-500 focus:outline-none"
    onClick={handleSearch}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      data-drawer-hide="drawer-example"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  </button>
</div>




     <div>
      
     <div className='flex gap-10 justify-center text-white'>
  <Link href='/login' data-drawer-hide="drawer-example" className='action-link  bg-[#2b2727] p-3 rounded-sm'>SignIn</Link>
  <Link href='/register' data-drawer-hide="drawer-example" className='action-link  bg-[#2b2727] p-3 rounded-sm'>SignUp</Link>
</div>
</div>
<div>
  <p className='text-white text-center mt-5 text-lg'>CATEGORIES</p>
  <div className='categories-container gap-0'>
    {catagories.map((category) => (
      <div
        onClick={() => {
          
          router.push(`categoryPage/${category.label.toLowerCase()}`);
        }}
        data-drawer-hide="drawer-example"
        key={category.label}
        value={category.label}
        aria-hidden="true"
        className='category-item  p-4 rounded-md text-white hover:shadow-md'
      >
        <div className=" items-center">
          <span className="text-white">{category.label}</span>
        </div>
         <hr/>
      </div>
     
    ))}
  </div>
</div>
     </div>
  
</div>   
    




      <div className='text-green-500 font-bold flex  items-center '>
        <Link href='/'><Image src='/Logo.png' width={100} height={100} className='text-green-500'/></Link>
        <Link href='/' className='text-3xl max-sm:text-xl'>ethiomarket<spn className='text-black font-medium opacity-40'>.com</spn></Link>
      </div> 
     
      <div className='flex border border-green-500  max-lg:border-none'>
        <div className='max-md:hidden'>
       <select className=' border-none h-[60px] w-[200px] px-10 text-green-500 '   
    
        >
          {catagories.map((category)=>(
              <option onClick={()=>router.push(`categoryPage/${category.label.toLowerCase()}`)} key={category.label} value={category.label} className='text-green-500 '>{category.label}</option>
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

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=' md:bg-green-600 w-[30px] h-[30px]   text-white  max-lg:text-green-500 max-lg:text-xl md:hidden ' onClick={handleSearchOpen}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

       
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=' md:bg-green-600 w-[100px] h-[60px] max-sm:w-[20px] h-[20px]  text-white  max-lg:text-green-500 max-lg:text-xl max-md:hidden' onClick={handleSearch}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

         </div>
      
    
      </div>
      <div className='flex gap-7  max-md:hidden'> 
      <div className='flex flex-col text-center items-center '>
    

        <ShowWishListQty className="w-12 h-12 text-green-500" Qty=" absolute top-[-2px] right-[-0px] text-white bg-green-950 h-4 w-4 rounded-full  flex item-center justify-center text-xs"  />
        <p className=' text-sm'>Wishlist</p>
        </div>
      <div className='flex flex-col text-center items-center '>
        <ShowCartQty className="w-12 h-12 text-green-500" Qty=" absolute top-[-2px] right-[-0px] text-white bg-green-950 h-4 w-4 rounded-full  flex item-center justify-center text-xs"/>
        <p className=' text-sm'>Cart</p>
        </div>
        
         
        <div className="dropdown dropdown-hover ">
          <div className='flex flex-col items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-green-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

          <p className='text-4xl'></p>
        
        <div className=' text-sm'>{currentUser ?currentUser?.name:'Account'}</div>
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
    {searchOpen &&
    <div className="relative flex items-center mx-auto w-[80%] md:hidden">
    <input
      type="text"
      placeholder="Search products..."
      className="py-2 px-4 w-[80%] border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
      onChange={(e) => {
        handleInput(e.target.value);
      }}    defaultValue={searchParams.get('query')?.toString()}

    />
   
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"       className="absolute right-0 top-0 h-full px-4 bg-green-500 text-white rounded-r-md flex items-center justify-center hover:bg-blue-600 focus:outline-none"
 onClick={handleSearch}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
   
  </div>
}
    </div>
    </>
  )
}

export default Nav
