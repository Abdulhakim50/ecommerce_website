
'use client'
import React from 'react'
import { getProductByCategory } from "@/actions/getCetagory";
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const CategoryPage = ({products,category}) => {
  const router = useRouter()
  
  return (
    <div className="container mx-auto my-8 ">
    <h1 className="text-3xl font-bold mb-6 text-green-500">Category {category}</h1>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto" >
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="relative group bg-white p-4 rounded-md shadow-md overflow-hidden"   onClick={()=>router.push(`/productDetails/${product.id}`)}>
            <Image
                 src={product.images[0].image} // Replace with the correct path to your image
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-40 object-cover mb-2 rounded-md group-hover:opacity-75 transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 hover:translate-y-0 transition duration-500 ease-in-out  hover:border-b-2 hover:border-black ">
            {/*  <button className="bg-white text-green-500 px-4 py-2  w-full hover:bg-green-500 hover:text-white transform translate-y-4 hover:translate-y-0 transition duration-300 ease-in-out">
                Add to Cart
        </button>*/}
            </div>
            <h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <p className="text-gray-600">Category: {product.catagory}</p>
            <p className="text-gray-600">Reviews: {product.reviews.length}</p>
          </div>
        ))
      ) : (
        <p className="col-span-3">No products found for this category.</p>
      )}
    </div>
    </div>
  )
}

export default CategoryPage