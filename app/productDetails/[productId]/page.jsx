
import React from 'react'
import ProductDetails from './ProductDetails'
import { Rating } from '@mui/material'
import ListRating from './ListRating'

import getProductById from '@/actions/getProductById'
import Nulldata from '@/components/Nulldata'
import { getCurrentUser } from '@/actions/getCurrentUser'
import AddRating from './AddRating'

const page = async({params}) => {
const product=await getProductById(params)
const user=await getCurrentUser()

if(!product) return <Nulldata title="product does not exist"/>
  return (
    <div>
      <div className='p-8'><ProductDetails product={product}/></div>
     <div>
     <AddRating product={product} user={user}/>
        <ListRating product={product}/>
     </div>
  
    </div>
  )
}

export default page