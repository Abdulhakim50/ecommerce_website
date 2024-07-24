'use client'

import { useCart } from '@/hooks/useCart'
import React from 'react'
import Heading from '../productDetails/[productId]/Heading'
import Link from 'next/link'
import Button from '@/components/Btn'
import ItemContent from './itemContent'
import formatPrice from '@/utils/formatPrice'
import { useRouter } from 'next/navigation'
import { Suspense } from 'react'
import { CSkeleton } from '@/utils/skeletons/skeletons'

const CartClient = ({currentUser}) => {
    const { cartProducts, handleClearCart, cartTotal } = useCart()
    const router = useRouter()

    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center my-[110px] gap-3">
              <div className='flex gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 bg-green-500 text-white ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

                <div className='text-green-500'>
                    your cart is empty
                </div>
                </div>
                <div className='bg-green-500 p-2'>
                    <Link href={"/"} className=' text-slate-500 flex items-center gap-1 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

                        <div className='text-white font-bold text-lg text-center'>
                            Start Shopping
                        </div>
                    </Link>
                </div>
            </div>
        )
    }  

  return (
   
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-8 text-green-600 text-center">Your Shopping Cart</h1>

    <div class="overflow-x-auto">
      <table class="min-w-full border rounded-lg overflow-hidden">
        <thead class="bg-green-500 text-white">
          <tr>
            <th class="py-2 px-4 text-left border-b">Product</th>
            <th class="py-2 px-4 text-left border-b">Price</th>
            <th class="py-2 px-4 text-left border-b">Quantity</th>
            <th class="py-2 px-4 text-left border-b">Total</th>
            <th class="py-2 px-4 text-left border-b">Remove</th>
          </tr>
        </thead>
        
                {cartProducts && cartProducts.map((item) => {
                    return <Suspense key={item.id}  fallback={<CSkeleton/>}><ItemContent  item={item} /></Suspense> 
                })}
            
      </table>
    </div>

    <div class="mt-8 p-4 bg-green-100 rounded-lg shadow-md">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold text-green-600">Cart Summary</h2>
      </div>
      <div class="flex justify-between items-center mb-2">
        <p class="text-green-600">Subtotal:</p>
        <p class="text-gray-700">{formatPrice(cartTotal)}</p>
      </div>
    
      <div>      <p class="text-gray-600 mb-2">Taxes and shipping calculated at checkout.</p>
</div>
      <div class="flex justify-between items-center mb-4">
        <button class="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600" onClick={() => { handleClearCart() }}>Clear Cart</button>
        <button class="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700" onClick={() => { currentUser ? router.push("/checkout") : router.push("/login") }}>{currentUser ? "Checkout" : "Login to checkout"}</button>
      </div>
      <Link href={"/"} className=' text-slate-500 flex items-center gap-1 mt-2'>
                   back
                    <span>continue shopping</span>
        </Link>
    </div>
  </div>





  
  )
}

export default CartClient
