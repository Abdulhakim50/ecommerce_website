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
    <div className='relative cursor-pointer'>
      <div>
      <AiOutlineShoppingCart className=" text-4xl text-green-700 max-sm:text-2xl" onClick={()=>router.push("/cart")}/>
      </div>
      <span className=" absolute top-[-3px] right-[-3px] text-white bg-green-950 h-4 w-4 rounded-full  flex item-center justify-center text-xs">{cartTotalQty}</span>

    </div>

    </>
  )
}

export default ShowCartQty