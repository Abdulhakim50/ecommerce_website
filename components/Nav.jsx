'use client'

import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineManageAccounts } from 'react-icons/md'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import Button from './Button'
import ShowCartQty from './ShowCartQty'
import { FiHeart } from "react-icons/fi";
import  { useState,useEffect } from 'react';
import { catagories } from '@/utils/Catagories'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'


const Nav = ({currentUser}) => {

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
         <FiMenu className=''/>  
        </div>
     
      <div className='text-green-500 font-bold text-3xl'>
        <p>Ethiomarket.com</p>
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
         <AiOutlineSearch className={`lg:hidden ${open? 'max-lg:absolute max-lg:top-[70px] max-lg:left-[250px] max-sm:left-[220px] text-2xl': 'max-lg:hidden'}`}  onClick={handle}  />
          <AiOutlineSearch className=' bg-green-600 w-[100px] h-[60px]  text-white max-lg:bg-white max-lg:text-green-500 max-lg:text-xl' onClick={handleSearch}/>
         </div>
         <div className='search-results'>
        {/* Display search results here */}
       
      </div>
    
      </div>
      <div className='flex gap-7 '> 
      <div className='flex flex-col text-center items-center '>
        <FiHeart className=' font-normal text-4xl'/>
        <div className=' text-sm'>Wishlist</div>
        </div>
      <div className='flex flex-col text-center items-center '>
        <ShowCartQty />
        <p className=' text-sm'>Cart</p>
        </div>
        
         
        <div className="dropdown dropdown-hover  ">
          <div className='flex flex-col items-center'>
          <MdOutlineManageAccounts className='text-4xl'/>
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
