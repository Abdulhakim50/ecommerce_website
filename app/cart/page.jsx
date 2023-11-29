import React from 'react'
import CartClient from './CartClient'
import { getCurrentUser } from '@/actions/getCurrentUser'

const cart = async () => {
  const currentUser=await getCurrentUser()
  return (
    <div className='pt-3'>
       <CartClient currentUser={currentUser} /> 
    </div>
  )
}

export default cart