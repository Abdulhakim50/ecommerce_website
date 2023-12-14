
 import React from 'react'
 import Form from './Form';
 import {getCurrentUser} from '@/actions/getCurrentUser';

   const register =async () => {
   const currentUser= await getCurrentUser()
  
 
   return (
   <div>
   <Form  currentUser={currentUser}/>
   </div>
  )
}

export default register