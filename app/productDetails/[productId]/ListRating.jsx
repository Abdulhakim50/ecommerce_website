'use client'

import React from 'react'
import Heading from './Heading'
import moment from 'moment'
import { Rating } from '@mui/material'
import Avater from '@/components/Avater'

const ListRating = ({product}) => {
  if (product.reviews.length === 0){
    return null
  }
  return (
    <div><Heading title="Product Review"/>
    <div className="text-sm mt-2">
  {product.reviews && product.reviews.map((review)=>{
    return <div key={review.id} className="max-w-[300px]">

        <div className="gap-2 flex items-center">
            <Avater src={review.user.image}/>
             <div className="font-semibold">{review?.user.name}</div>
             <div>{moment(review.createdDate).fromNow()}</div>
        </div>
        <div><Rating value={review.rating} readOnly/></div>
        <div>{review.comment}</div>
    </div>
   
  })}
    </div>
    </div>
  )
}

export default ListRating