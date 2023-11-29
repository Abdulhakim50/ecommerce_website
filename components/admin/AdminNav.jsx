'use client'

import React from 'react'
import Link from 'next/link'
import AdminNavitem from './AdminNavItem'
import {MdDashboard} from 'react-icons/Md'
import { usePathname } from 'next/navigation'



const AdminNav = () => {
  const pathname = usePathname();
  return (
    <div>
      <Link href="/admin">
        <AdminNavitem label="Dashbord" icon={MdDashboard} selected={pathname === "/admin"}/>
      </Link>
      <Link href="/admin/addPoduct">
        <AdminNavitem label="Add-product" icon={MdDashboard} selected={pathname === "/admin/addPoduct"}/>
      </Link>
      <Link href="/admin/manageOrders">
        <AdminNavitem label="Manageorders" icon={MdDashboard} selected={pathname === "/admin/manageOrders"}/>
      </Link>
      <Link href="/admin/manageProduct">
        <AdminNavitem label="Manageproducts" icon={MdDashboard} selected={pathname === "/admin/manageProduct"}/>
      </Link>
    </div>
  )
}

export default AdminNav