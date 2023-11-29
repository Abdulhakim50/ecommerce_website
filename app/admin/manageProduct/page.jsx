import React from 'react'
import ManageProductClient from './ManageProductClient'
 import { getCurrentUser } from '@/actions/getCurrentUser'
import Nulldata from '@/components/Nulldata'
import getProduct from '@/actions/getPoduct'

const ManageProducts = async () => {
  const products=await getProduct({catagory:null})
  const currentUser= await getCurrentUser()

  if(!currentUser || currentUser.role !== "ADMIN"){
    return <Nulldata  title="Oops Access denied"/>
  }
  return (
    <div><ManageProductClient  products={products}/></div>
  )
}

export default ManageProducts