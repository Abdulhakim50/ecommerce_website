import React from 'react'
import NewarrivalCard from './NewarrivalCard';
import Image from 'next/image';
import Nulldata from './Nulldata';
import { Suspense } from 'react';
import { NcardSkeleton, PcardSkeleton } from '@/utils/skeletons/skeletons';


const Newarrival = ({mostViewed}) => {

    if(mostViewed.length === 0){
        return <Nulldata  title={'Oops! No product found.Click "All" to clear filters'}/>
    }

    
  return (
<div className='mt-20 text-center font-bold text-lg'>
     <p className='max-sm:bg-green-500 max-sm:mb-3 rad max-sm:mx-2 text-2xl text-white'>Most Viewed</p>
     <div className=' grid max-sm:grid-cols-2  lg:grid-cols-6 md:grid-cols-3 mx-10 max-sm:mx-2 max-sm:gap-2 gap-4'  >
      
    {mostViewed.map((item)=>{ 

        return  <Suspense key={item.id}  fallback={<NcardSkeleton />}> <NewarrivalCard data={item} /> </Suspense>

   

      
})}
    </div>
    </div>
  )
}

export default Newarrival