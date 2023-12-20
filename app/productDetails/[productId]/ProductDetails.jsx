
'use client'
import Image from 'next/image'
import React from 'react'
import formatPrice from '@/utils/formatPrice'
import { Rating } from '@mui/material'
import SetColor from '@/components/SetColor'
import { useState, useCallback, useEffect } from 'react';
import SetQuantity from '@/components/SetQuantity';
import Btn from '@/components/Btn'
import ProductImg from '@/components/ProductImg'
import { useCart } from '@/hooks/useCart'
//import { useCartElementState } from '@stripe/react-stripe-js'

import { useRouter } from 'next/navigation'

const ProductDetails = ({ product }) => {
    const { handleAddToCart, cartProducts } = useCart()
    const [isProductInCart, setisProductInCart] = useState(false)
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
    const router = useRouter()
    console.log(cartProducts)

    useEffect(() => {

        setisProductInCart(false)

        if (cartProducts) {
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id);

            if (existingIndex > -1) {
                setisProductInCart(true);
            }
        }
    }, [cartProducts])


    const productRating = product.reviews.reduce((acc, item) =>
        item.rating + acc, 0) / product.reviews.length;

    const handleColorSelect = useCallback(
        (value) => {
            setcartProduct((prev) => {
                return { ...prev, selectedImg: value };
            })
        },
        [cartProduct.selectedImg],
    )

    const handleQuantityIncrease = useCallback(() => {
        if (cartProduct.quantity === 100) {
            return;
        }
        setcartProduct((prev) => {
            return { ...prev, quantity: ++prev.quantity }
        })
    }, [cartProduct])
    const handleQuantityDecrease = useCallback(() => {
        if (cartProduct.quantity === 1) {
            return;
        }
        setcartProduct((prev) => {
            return { ...prev, quantity: --prev.quantity }
        })
    }, [cartProduct])


    return (


        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

        {/* Left side with product image */}
        <div className="">
            <ProductImg cartProduct={cartProduct} product={product} handleColorSelect={handleColorSelect} />
        </div>
    
        {/* Right side with product details */}
        <div className="bg-green-800 p-6 rounded-lg text-white">
    
            <h2 className='text-4xl font-semibold mb-4'>{product.name}</h2>
            <div className='text-3xl font-bold mb-4'>${formatPrice(product.price)}</div>
            <div className='flex items-center gap-2 mb-4'>
                <Rating value={productRating} readOnly />
                <div>{product.reviews.length} reviews</div>
            </div>
            <hr className='w-1/4 my-4 border-t-2 border-green-600' />
            <div className='text-justify mb-4'>{product.description}</div>
            <hr className='w-1/4 my-4 border-t-2 border-green-600' />
            <div className='mb-4'>
                <span className='font-semibold'>CATEGORY:</span> {product.category}
            </div>
            <div className='mb-4'>
                <span className='font-semibold'>BRAND:</span> {product.brand}
            </div>
            <div className={product.inStock ? "text-green-400":"text-rose-400 mb-4"}>{product.inStock?'In stock' : 'Out of stock'}</div>
            <hr className='w-1/4 my-4 border-t-2 border-green-600' />
    
            <span className="text-yellow-500 block mb-4">Product added to cart</span>
            <div>
                {isProductInCart ? (
                    <>
                        <p className="mb-4 text-green-400 flex items-center gap-2">
                            check_circle
                        </p>
                        <div className="max-w-[200px]">
                            <Btn label="View Cart" outline onClick={() => router.push("/cart")} />
                        </div>
                    </>
                ) : (
                    <>
                        <SetColor cartProduct={cartProduct} images={product.images} handleColorSelect={handleColorSelect} />
                        <div className="mb-4">
                            <SetQuantity cartProduct={cartProduct} handleQtyDecrease={handleQuantityDecrease} handleQtyIncrease={handleQuantityIncrease} />
                            <div className="max-w-[200px]">
                                <Btn label="Add To Cart" onClick={() => handleAddToCart(cartProduct)} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
    


    )
}

export default ProductDetails