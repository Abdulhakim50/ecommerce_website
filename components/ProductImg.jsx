'use client'

import React from 'react'
import Image from 'next/image'

const ProductImg = ({cartProduct,product,handleColorSelect}) => {
  return (
    <div className="grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px sm:min-h=[400px] flex">
        <div className="w-[200px] flex-col items-center justify-center gap-4 cursor-pointer  h-full max-h-[500px] min-h-[300px sm:min-h=[400px] mt-10">
            {product.images.map((image)=>{
               return (<div key={product.color} 
                onClick={()=>  handleColorSelect(image)
                } className={`relative w-[50%] aspect-square rounded border-teal-300 ml-16 ${cartProduct.selectedImg.color === image.color? "border-[1.5px]" :"border-none"}`}>
            <Image src={image.image} alt={image.color} fill className="object-contain" />
                </div>
            )})}
        </div>
        <div className="col-span-5 relative aspect-square">
      <Image src={cartProduct.selectedImg.image} alt={cartProduct.name} width={200} height={200} className="w-[400px] objext-contain max-h-[400px] min-h-[300px sm:min-h=[400px] mt-16"/>
        </div>
        </div>
  )
}

export default ProductImg