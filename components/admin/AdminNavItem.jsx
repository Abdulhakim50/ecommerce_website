import { usePathname } from 'next/navigation'
import React from 'react'


const AdminNavitem = ({label,icon,selected}) => {
    const pathname= usePathname();
  return (
    <div className='text-center w-full h-20 bg-blue-700'>{label} </div>
  )
}

export default AdminNavitem