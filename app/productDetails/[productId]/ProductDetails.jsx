
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
import { MdCheckCircle } from 'react-icons/Md'
import { useRouter } from 'next/navigation'

const productDetails = ({ product }) => {
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


        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <ProductImg cartProduct={cartProduct} product={product} handleColorSelect={handleColorSelect} />
            </div>
            <div>
                <h2 className='text-3xl font-medium text-slate-700'>{product.name}</h2>
                <div className=' text-2xl font-bold'>{formatPrice(product.price)}</div>
                <div className='flex gap-2'>
                    <Rating value={productRating} readOnly />
                    <div>{product.reviews.length} reviews</div>
                </div>
                 <hr className='w-[30% ]my-2' />
                <div className='text-justify'>{product.description}</div>
                <hr className='w-[30%] my-2' />
                <div><span className='font-semibold'>CATEGORY:</span>{product.catagory}</div>
                <div><span className='font-semibold'>BRAND:</span>{product.brand}</div>
                 <div className={product.inStock ? " text-teal-400":"text-rose-400"}>{product.inStock?'In stock' : 'Out of stock'}</div>
                 <hr className='w-[30%] my-2' />


               

                <span>Product added to cart</span>
                <div>
                    {isProductInCart ? (<>
                        <p className="mb-2 text-slate-500 flex item-center gap-1">
                            <MdCheckCircle className="text-teal-400" size={20} />

                        </p>
                        <div className="max-x-[300px]">
                            <Btn label="View Cart" outline onClick={() => {
                                router.push("/cart")

                            }} />
                        </div>
                    </>)
                        :

                        (<>

                            <SetColor cartProduct={cartProduct} images={product.images} handleColorSelect={handleColorSelect} />
                            <div>
                            <SetQuantity cartProduct={cartProduct} handleQtyDecrease={handleQuantityDecrease} handleQtyIncrease={handleQuantityIncrease} />
                            <div className="max-w-[300px]">
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

export default productDetails