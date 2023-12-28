import React from 'react'
import ClientOrders from './ClientOrders'
 import { getCurrentUser } from '@/actions/getCurrentUser'
import Nulldata from '@/components/Nulldata'
import getOrdersByUserId from '@/actions/getOrdersByUserId'

const page = async () => {

  const currentUser= await getCurrentUser()
 

  if(!currentUser ){
    return <Nulldata  title="Oops Access denied"/>
  }
  const orders = await getOrdersByUserId(currentUser.id)
  if(!orders ){
    return <Nulldata  title="No orders Yet..."/>
  }

  return (
    <div className='mt-20 mb-20 ml-10 mr-10'><ClientOrders  orders={orders}/></div>
  )
}

export default page