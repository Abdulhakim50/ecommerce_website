
'use client'
import React from 'react'
import { useCallback } from 'react'
import queryString from 'query-string'
import ItemContent from '@/app/cart/itemContent'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'




const Catagory = ({ item,label }) => {
const router=useRouter()
const params=useSearchParams
const searchParams = useSearchParams();
const pathname = usePathname();
const { replace } = useRouter();



const handleClick =useCallback(()=>{
  if(label ==='All') {
    router.push('/')
  } else{
  let currentQuery={};
  if(params){
    currentQuery=queryString.parse(params.toString())
  }
  const updatedQuery={
    ...currentQuery,
    catagory:label
  }

  const url=queryString.stringifyUrl(
    {
    url:'/',
    query:updatedQuery
    },
    {
      skipNull:true
    }
  )
     router.push(url)
  }

},[label,params,router])



const handleCategory =(term) => {
  const params = new URLSearchParams(searchParams)
  
    if (term) {
      params.set('category', term);
    } else {
      params.delete('category');
    }
    replace(`categoryPage?${params.toString()}`);

  };

  return (
    <>
         <div class="dropdown dropdown-hover dropdown-right  w-96 h-11 p-2 cursor-pointer " onClick={()=>handleCategory(item.label)} >
      <div className='flex  '>
       <div className=' text-5xl text-green-500'>{item.icon}</div>
      <div tabindex="0" className='flex-col'>
        <span></span>{item.label}

        </div>
      </div>
    
    
    
      </div>
    </>
  )
}

export default Catagory