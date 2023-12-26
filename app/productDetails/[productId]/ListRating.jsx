'use client'

import React from 'react'
import Heading from './Heading'
import moment from 'moment'
import { Rating } from '@mui/material'
import Avater from '@/components/Avater'

const ListRating = ({product}) => {
  if (product.reviews.length === 0){
    return  <div className=''><h1 className='font-bold'>Product Reviews</h1 ><p className=' mt-20 mb-40 text-center'>No comments yet</p></div>
  }
  return (
    <div className="w-full">
    <Heading title="Product Reviews" />
  
    <div className="mt-4 grid grid-cols-1  gap-4 ">
      {product.reviews &&
        product.reviews.map((review) => (
          <div
            key={review.id}
            className="max-w-full bg-white p-4 rounded-lg shadow-md mb-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center mb-2">
              <Avater src={review.user.image} />
              <div className="ml-2">
                <div className="font-semibold">{review?.user.name}</div>
                <div className="text-gray-500">
                  {moment(review.createdDate).fromNow()}
                </div>
              </div>
            </div>
            <div className="mb-2">
              <Rating value={review.rating} readOnly />
            </div>
            <div className="text-gray-700">{review.comment}</div>
          </div>
        ))}
    </div>
  </div>
  


  )
}

export default ListRating