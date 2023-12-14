
'use client'
import React from 'react'
import { IoMdArrowDropright, IoMdHeartEmpty} from 'react-icons/Io'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import queryString from 'query-string'
import ItemContent from '@/app/cart/itemContent'



const Catagory = ({ item,label }) => {
const router=useRouter()
const params=useSearchParams
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

  return (
    <>
         <div class="dropdown dropdown-hover dropdown-right  w-96 h-11 p-2 cursor-pointer" onClick={()=>router.push(`categoryPage/${item.label.toLowerCase()}`)} >
      <div className='flex items-center content-center '>
       <div className=' text-5xl text-green-500'>{item.icon}</div>
      <div tabindex="0" className='flex-col'>
        <span><IoMdArrowDropright className='arrow'/></span>{item.label}
        </div>
      </div>
    
    
    
      </div>
    </>
  )
}

export default Catagory