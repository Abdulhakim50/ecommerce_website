'use client'
import React from 'react'
import formatPrice from '@/utils/formatPrice'
import Link from 'next/link'
import Image from 'next/image'
import SetQuantity from '@/components/SetQuantity'
import { useCart } from '@/hooks/useCart'

const ItemContent = ({item}) => {
    const {handleRemoveCart,handleCartQtyInc,handleCartQtyDec, handleClearCart}=useCart()
  
  return (
    <tbody class="divide-y divide-gray-300">
    <tr class="hover:bg-gray-100">
      <td class="py-4 px-6 text-left border-b">
        <div class="flex items-center flex-col md:flex-row">
        <Image
                        src={item.selectedImg.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className=' object-cover mb-4 md:mb-0 md:mr-4 rounded-lg'

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
        <button class="text-red-500 hover:underline" onClick={() =>  handleRemoveCart(item)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-900">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>
      </td>
    </tr>
  </tbody>
  )
}

export default ItemContent