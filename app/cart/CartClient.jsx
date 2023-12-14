'use client'

import { useCart } from '@/hooks/useCart'
import React from 'react'
import Heading from '../productDetails/[productId]/Heading'
import Link from 'next/link'
import Button from '@/components/Btn'
import ItemContent from './itemContent'
import formatPrice from '@/utils/formatPrice'
import { useRouter } from 'next/navigation'

const CartClient = ({currentUser}) => {
    const { cartProducts, handleClearCart, cartTotal } = useCart()
    const router = useRouter()

    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center">
                <div>
                    your cart is empty
                </div>
                <div>
                    <Link href={"/"} className=' text-slate-500 flex items-center gap-1 mt-2'>
                         back
                        <span>
                            Start Shopping
                        </span>
                    </Link>
                </div>
            </div>
        )
    }
  return (
<div class="">
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
                    return <ItemContent key={item.id}  item={item} />
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
        <button class="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700" onClick={() => { currentUser ? router.push("/checkout") : router.push("/ogin") }}>{currentUser ? "Checkout" : "Login to checkout"}</button>
      </div>
      <Link href={"/"} className=' text-slate-500 flex items-center gap-1 mt-2'>
                   back
                    <span>continue shopping</span>
        </Link>
    </div>
  </div>
</div>


    


    
    



    


 

  )
}

export default CartClient