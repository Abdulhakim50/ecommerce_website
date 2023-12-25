'use client'
import React from 'react'
import {useState} from 'react'
 import { useDebouncedCallback } from 'use-debounce'
 import { useSearchParams, usePathname, useRouter } from 'next/navigation';


const FilterInput = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
     const router =useRouter()

  
       
        const handelMinChange = useDebouncedCallback((term) => {
            console.log(`Searching... ${term}`);
           
            const params = new URLSearchParams(searchParams)
            params.set('page', '1');
            if (term) {
              params.set('filterMin', term);
            } else {
              params.delete('filterMin');
            }
            replace(`${pathname}?${params.toString()}`);
        
          
          }, 300);
      
 

          const handlMaxChange = useDebouncedCallback((term) => {
            console.log(`Searching... ${term}`);
           
            const params = new URLSearchParams(searchParams)
            params.set('page', '1');
            if (term) {
              params.set('filterMax', term);
            } else {
              params.delete('filterMax');
            }
            replace(`${pathname}?${params.toString()}`);
        
          }, 300);
          return (

            <div>
              <p className='text-center bg-green-500'>price</p>
            <div className='grid grid-cols-2 gap-5 px-5 overflow-hidden max-sm:grid-cols-1 max-sm:gap-2'>
             
            <div className='flex flex-col justify-center items-center'>
        
                <label htmlFor="" className='text-[15px] opacity-75'>Min</label>
                <div className='relative'>
                    <span className='absolute left-3 top-1'>$</span>
                    <input className='w-full outline-none border-[1px] rounded-lg px-2 text-center py-[2px]' type="number" name="min" onChange={(e) => handelMinChange(e.target.value)}  defaultValue={searchParams.get('filterMin')?.toString()} id="" />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <label htmlFor="" className='text-[15px] opacity-75'>Max</label>
                <div className='relative'>
                    <span className='absolute left-3 top-1'>$</span>
                    <input className='w-full outline-none border-[1px] rounded-lg px-2 text-center py-[2px]' type="number" name="max" onChange={(e) =>  handlMaxChange(e.target.value)} defaultValue={searchParams.get('filterMax')?.toString()}  id="" />
                </div>
            </div>
        </div>
        </div>
          ) 
}

export default FilterInput