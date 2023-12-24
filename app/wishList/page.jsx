import React from 'react'
import { getCurrentUser } from '@/actions/getCurrentUser'
import WishListClient from './WishListClient'

const cart = async () => {
  const currentUser=await getCurrentUser()
  return (
    <div className='pt-3'>
       <WishListClient currentUser={currentUser} /> 
    </div>
  )
}

export default cart