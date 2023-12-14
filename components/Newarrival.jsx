import React from 'react'
import NewarrivalCard from './NewarrivalCard';
import Image from 'next/image';


const Newarrival = ({dynamicProducts}) => {

    if(dynamicProducts.length === 0){
        return <Nulldata  title={'Oops! No product found.Click "All" to clear filters'}/>
    }

    
  return (
<div className='mt-20 text-center font-bold text-lg'>
     <p>New Arrivals</p>
     <div className=' grid lg:grid-cols-6 mt- md:grid-cols-3 sm:grid-cols-2 mx-10 gap-4'  >
      
    {dynamicProducts.map((item)=>{ 

        return <NewarrivalCard data={item} /> 

   

      
})}
    </div>
    </div>
  )
}

export default Newarrival