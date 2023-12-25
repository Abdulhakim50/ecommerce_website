
import React from 'react'
import ProductDetails from './ProductDetails'
import { Rating } from '@mui/material'

import getProductById from '@/actions/getProductById'
import Nulldata from '@/components/Nulldata'
import { getCurrentUser } from '@/actions/getCurrentUser'


const page = async({params}) => {
const product=await getProductById(params)
const user=await getCurrentUser()

if(!product) return <Nulldata title="product does not exist"/>
  return (
    <div>
      <div className='p-8'><ProductDetails product={product} user={user}/></div>
     <div>
   
   
     </div>
  
    </div>
  )
}

export default page