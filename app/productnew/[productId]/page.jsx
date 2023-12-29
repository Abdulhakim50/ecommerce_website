import React from 'react'
import getProductById from '@/actions/getProductById'
import NewarrivalCard from '@/components/MostViewedCard'

const page = async ({params}) => {
    const product=await getProductById(params)
  return (
    <div><NewarrivalCard product={product}/></div>
  )
}

export default page