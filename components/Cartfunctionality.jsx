
'use client'
import React from 'react'

const Cartfunctionality = () => {
    const [cartProduct, setcartProduct] = useState(
        {
            id: product.id,
            name: product.name,
            description: product.description,
            catagory: product.catagory,
            brand: product.brand,
            selectedImg: { ...product.images[0] },
            quantity: 1,
            price: product.price
        }
    )
  return (
    <div>Cartfunctionality</div>
  )
}

export default Cartfunctionality