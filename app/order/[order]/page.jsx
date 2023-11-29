
import React from 'react'
import { Rating } from '@mui/material'
import OrderDetails from './OrderDetails'
import getOrderById from '@/actions/getOrderById'
import Nulldata from '@/components/Nulldata'
import { getCurrentUser } from '@/actions/getCurrentUser'


const page = async ({params}) => {
    const currentUser=await getCurrentUser()
const order =await getOrderById(params)


if(!currentUser) return <Nulldata title="Access Denied"/>
if(!order){
    return<Nulldata title="No Order"/>
}

  return (
    <div>
        <OrderDetails order={order}/>
  
    </div>
  )
}

export default page