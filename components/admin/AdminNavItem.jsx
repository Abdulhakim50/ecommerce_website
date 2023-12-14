import { usePathname } from 'next/navigation'
import React from 'react'


const AdminNavitem = ({label,icon,selected}) => {
    const pathname= usePathname();
  return (
    <>
    <div className='flex  items-center gap-3'>
    <div className=' text-3xl text-white'></div>
    <div className=' text-xl text-white font-bold'>{label} </div>
  
    </div>
  </>
  )
}

export default AdminNavitem