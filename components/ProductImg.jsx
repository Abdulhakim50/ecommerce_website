'use client'

import React from 'react'
import Image from 'next/image'

const ProductImg = ({cartProduct,product,handleColorSelect}) => {
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px sm:min-h-[400px] flex items-center">

    {/* Color variations */}
    <div className="col-span-1 flex flex-col items-center justify-between gap-4 cursor-pointer h-full max-h-[500px] min-h-[300px sm:min-h-[400px] mt-10">

        {product.images.map((image, index) => (
            <div
                key={index}
                onClick={() => handleColorSelect(image)}
                className={`relative w-[100%]  aspect-square rounded border-teal-300 mx-auto ${cartProduct.selectedImg.color === image.color ? "border-[1.5px]" : "border-none"}`}
            >
                <Image src={image.image} alt={image.color} fill className="object-cover" />
            </div>
        ))}

    </div>

    {/* Selected image */}
    <div className="col-span-5 relative aspect-square">
        <Image
            src={cartProduct.selectedImg.image}
            alt={cartProduct.name}
            width={400}
            height={400}
            className="w-full h-full mt-16"
        />
    </div>
</div>

       
  )
}

export default ProductImg