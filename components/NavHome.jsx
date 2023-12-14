import React from 'react'
import { getCurrentUser } from '@/actions/getCurrentUser'
import Nav from './Nav';


const NavHome = async () => {
    const currentUser = await getCurrentUser();

  return (
    <Nav currentUser={currentUser}/>
  )
}

export default NavHome