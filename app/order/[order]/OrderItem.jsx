import React from 'react'
import Image from 'next/image'
import formatPrice from '@/utils/formatPrice'
import truncate from '@/utils/truncate'

const OrderItem = ({item}) => {
  return (
    <div>
    <div>
        <Image src={item.selectedImg.image} alt={item.name} fill/>
    </div>
    <div>
        <div>{truncate(item.name)}</div>
        <div>{item.selectedImg.color}</div>
    </div>
    <div>
        <div>{formatPrice(item.price)}</div>
        <div>{item.quantity}</div>
        <div>{(item.price * item.quantity).toFixed(2)}</div>
    </div>
    </div>
  )
}

export default OrderItem