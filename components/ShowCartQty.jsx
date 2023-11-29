'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/hooks/useCart'
import { AiOutlineShoppingCart} from 'react-icons/Ai'


const ShowCartQty = () => {
    const router=useRouter()
    const {cartTotalQty}=useCart();
  return (
    <>
    <span className="text-white bg-green-600 rounded-full text-xs w-3 h-3 cart text-center ">{cartTotalQty}</span>
    <AiOutlineShoppingCart className="w-10 h-6" onClick={()=>router.push("/cart")}/>
    </>
  )
}

export default ShowCartQty