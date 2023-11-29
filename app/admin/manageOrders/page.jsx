import React from 'react'
import ManageClientOrders from './manageClientOrder'
import { getCurrentUser } from '@/actions/getCurrentUser'
import Nulldata from '@/components/Nulldata'
import getOrders from '@/actions/getOrders'

const page = async () => {
  
  const currentUser= await getCurrentUser()
  const orders=await getOrders()

  if(!currentUser || currentUser.role !== "ADMIN"){
    return <Nulldata  title="Oops Access denied"/>
  }
  return (
    <div><ManageClientOrders orders={orders}/></div>
  )
}

export default page