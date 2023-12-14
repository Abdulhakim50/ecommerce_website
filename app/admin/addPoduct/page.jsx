import { getCurrentUser } from '@/actions/getCurrentUser';
import React from 'react'
import Nulldata from '@/components/Nulldata';
import AddProductForm from './AddProductForm';

const page = async() => {

    const currentUser=await getCurrentUser();

    if(!currentUser  ||  currentUser.role !== 'ADMIN'){
        return <Nulldata title="Oops! access denide"/>
    }
  return (
    <div>
        <AddProductForm/>
        
    </div>
  )
}

export default page