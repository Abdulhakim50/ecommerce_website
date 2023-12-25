
'use client'
import React from 'react'
import { catagories } from '@/utils/Catagories'
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


const FilterCategory = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
     const router =useRouter()

     const params = new URLSearchParams(searchParams)
    const handleCatChange = useDebouncedCallback((term) => {
      
        params.set('page', '1');
        if (term) {
          params.set('catFilter', term);
        } else {
          params.delete('catFilter');
        }
        replace(`${pathname}?${params.toString()}`);
    
      }, 300);
      return (
        < div className='max-sm:hidden'>
          <p className='text-center bg-green-500 text-sm md:text-md '>Category</p>
      
          <div className='grid grid-cols-3 gap-5 max-sm:grid-cols-2'>
            {catagories.map((cat) => (
              <div
                className='cursor-pointer ml-5 max-md:text-sm'
                key={cat.label}
                onClick={() => handleCatChange(cat.label)}
              >
                {cat.label}
              </div>
            ))}
          </div>
        </div>
      );
      
}

export default FilterCategory