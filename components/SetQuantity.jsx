'use client'

import React from 'react'

const SetQuantity = ({cartCounter,cartProduct,handleQtyIncrease,handleQtyDecrease}) => {
  return (
    <div className="flex gap-3 items-center">
  {cartCounter?null: <div className="font-semibold">
         Quantity
    </div>}
    <div className="flex gap-2 items-center text-base"></div>
    <button onClick={handleQtyDecrease} className="border-[1.2px] border-s-teal-300 px-2 rounded">-</button>
    <div>{cartProduct.quantity}</div>
    <button onClick={handleQtyIncrease}  className="border-[1.2px] border-s-teal-300 px-2 rounded">+</button>
    </div>
  )
}

export default SetQuantity