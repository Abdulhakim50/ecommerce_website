import React from 'react'
import MostViewedCard from './MostViewedCard';
import Image from 'next/image';
import Nulldata from './Nulldata';


const Newarrival = ({dynamicProducts}) => {

    if(dynamicProducts.length === 0){
        return <Nulldata  title={'Oops! No product found.Click "All" to clear filters'}/>
    }

    
  return (
<div className='mt-20 text-center font-bold text-lg'>
     <p>Most Viewed</p>
     <div className=' grid lg:grid-cols-6 mt- md:grid-cols-3 sm:grid-cols-2 mx-10 gap-4'  >
      
    {dynamicProducts.map((item)=>{ 

        return <MostViewedCard data={item} /> 

   

      
})}
    </div>
    </div>
  )
}

export default Newarrival