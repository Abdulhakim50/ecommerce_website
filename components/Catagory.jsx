
'use client'
import React from 'react'
import { IoMdArrowDropright, IoMdHeartEmpty} from 'react-icons/Io'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import queryString from 'query-string'


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
         <div class="dropdown dropdown-hover dropdown-right  border w-96 h-11 p-2 cursor-pointer" onClick={handleClick}>

      <div tabindex="0" className='flex-col'><span><IoMdArrowDropright className='arrow'/></span>{item.label}</div>
      <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    
      </div>
    </>
  )
}

export default Catagory