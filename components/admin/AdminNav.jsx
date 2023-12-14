'use client'

import React from 'react'
import Link from 'next/link'
import AdminNavitem from './AdminNavItem'

import { usePathname } from 'next/navigation'




const AdminNav = () => {
  const pathname = usePathname();
  return (
    <div className='  w-full h-full bg-blue-700 rounded-md p-10 '>
      <div className='flex flex-col gap-6 mt-10'>
      <Link href="/admin">
        <AdminNavitem label="Dashbord"  selected={pathname === "/admin"}/>
      </Link>
      <Link href="/admin/addPoduct">
        <AdminNavitem label="Add-product"  selected={pathname === "/admin/addPoduct"}/>
      </Link>
      <Link href="/admin/manageOrders">
        <AdminNavitem label="Manage orders"  selected={pathname === "/admin/manageOrders"}/>
      </Link>
      <Link href="/admin/manageProduct">
        <AdminNavitem label="Manage products"  selected={pathname === "/admin/manageProduct"}/>
      </Link>
    </div>
    </div>
  )
}

export default AdminNav