'use client'
import React from 'react'
import formatPrice from '@/utils/formatPrice'
import Link from 'next/link'
import Image from 'next/image'
import SetQuantity from '@/components/SetQuantity'
import { useCart } from '@/hooks/useCart'

const WishList = ({item}) => {
    const {handleRemoveWishList, handleClearCart}=useCart()
  
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
        <button class="text-red-500 hover:underline" onClick={() =>  handleRemoveWishList(item)}>Remove</button>
      </td>
    </tr>
  </tbody>
  )
}

export default WishList