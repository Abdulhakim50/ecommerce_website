import React from 'react'
import NewarrivalCard from './NewarrivalCard';
import Image from 'next/image';
import Nulldata from './Nulldata';


const Newarrival = ({dynamicProducts}) => {

    if(dynamicProducts.length === 0){
        return <Nulldata  title={'Oops! No product found.Click "All" to clear filters'}/>
    }

    
  return (
<div className='mt-20 text-center font-bold text-lg'>
     <p className='max-sm:bg-green-500 max-sm:mb-3 rad max-sm:mx-2'>New Arrivals</p>
     <div className=' grid max-sm:grid-cols-2  lg:grid-cols-6 md:grid-cols-3 mx-10 max-sm:mx-2 max-sm:gap-2 gap-4'  >
      
    {dynamicProducts.map((item)=>{ 

        return <NewarrivalCard data={item} key={item.id} /> 

   

      
})}
    </div>
    </div>
  )
}

export default Newarrival