'use client'
import React from 'react'
import formatPrice from '@/utils/formatPrice'
import Link from 'next/link'
import Image from 'next/image'
import SetQuantity from '@/components/SetQuantity'
import { useCart } from '@/hooks/useCart'

const itemContent = ({item}) => {
    const {handleRemoveCart,handleCartQtyInc,handleCartQtyDec, handleClearCart}=useCart()

  return (
    <tbody class="divide-y divide-gray-300">
    <tr class="hover:bg-gray-100">
      <td class="py-4 px-6 text-left border-b">
        <div class="flex items-center gap-5">
        <Image
                        src={item.selectedImg.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className=' object-contain'

                    />        
        <p class="text-lg font-semibold">{item.name}</p>
        </div>
      </td>
      <td class="py-4 px-6 text-left border-b">{formatPrice(item.price)}</td>
      <td class="py-4 px-6 text-left border-b">
      <SetQuantity cartCounter={true} cartProduct={item}  handleQtyIncrease={()=> handleCartQtyInc(item)} handleQtyDecrease={()=>handleCartQtyDec(item)}/>
      </td>
      <td class="py-4 px-6 text-left border-b">{formatPrice(item.price * item.quantity)} </td>
      <td class="py-4 px-6 text-left border-b">
        <button class="text-red-500 hover:underline" onClick={() =>  handleRemoveCart(item)}>Remove</button>
      </td>
    </tr>
  </tbody>
  )
}

export default itemContent