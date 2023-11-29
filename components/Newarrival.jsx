import React from 'react'
import NewarrivalCard from './NewarrivalCard';
import Image from 'next/image';


const Newarrival = ({dynamicProducts}) => {

    if(dynamicProducts.length === 0){
        return <Nulldata  title={'Oops! No product found.Click "All" to clear filters'}/>
    }

    
  return (
    <div className=" w-full justify-center">

    <p className="font-extrabold">Newarrival</p>
    <div className="mt-20 grid grid-cols-6 gap-4 w-[1700px] ">
      
    {dynamicProducts.map((item)=>{ 

        return <NewarrivalCard data={item} /> 

   

      
})}
    </div>
    </div>
  )
}

export default Newarrival