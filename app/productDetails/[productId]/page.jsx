
import React from 'react'
import ProductDetails from './ProductDetails'
import { Rating } from '@mui/material'

import getProductById from '@/actions/getProductById'
import Nulldata from '@/components/Nulldata'
import { getCurrentUser } from '@/actions/getCurrentUser'
import { fetchRelatedProducts } from '@/actions/relatedProducts'


const page = async({params}) => {
const product=await getProductById(params)
const user=await getCurrentUser()
const relatedProducts= await fetchRelatedProducts(params)
if(!product) return <Nulldata title="product does not exist"/>
  return (
    <div>
      <div className='p-8'><ProductDetails product={product} user={user} relatedProducts={relatedProducts}/></div>
     <div>
   
   
     </div>
  
    </div>
  )
}

export default page