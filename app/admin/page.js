import React from 'react'
import { getCurrentUser } from '@/actions/getCurrentUser';
import Nulldata from '@/components/Nulldata';

const page = async () => {
  const currentUser=await getCurrentUser();

  if(!currentUser  ||  currentUser.role !== 'ADMIN'){
      return <Nulldata title="Oops! access denide"/>
  }
  return (
    <div>page</div>
  )
}

export default page