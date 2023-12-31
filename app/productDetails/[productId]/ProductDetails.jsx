
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
import truncate from '@/utils/truncate'
import Link from 'next/link'
import AddRating from './AddRating'
import ListRating from './ListRating'
import { Suspense } from 'react'
import ProductSkeleton from '@/components/ProductSkeleton'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


//import { useCartElementState } from '@stripe/react-stripe-js'

import { useRouter } from 'next/navigation'

const ProductDetails = ({ product, user, relatedProducts }) => {
    const { handleAddToCart, handleAddToWishList, cartProducts, WishListProducts } = useCart()
    const [isProductInCart, setisProductInCart] = useState(false)
    const [isProductInWishList, setisProductInWishList] = useState(false)

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


    useEffect(() => {

        setisProductInWishList(false)

        if (WishListProducts) {
            const existingIndex = WishListProducts.findIndex((item) => item.id === product.id);

            if (existingIndex > -1) {
                setisProductInWishList(true);
            }
        }
    }, [WishListProducts])
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



    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,           // Enable autoplay
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // Large screens
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768, // Medium screens
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480, // Small screens
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (

        <>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 items-start ml-20 max-lg:mx-auto'>
                {/* Left side with product image */}
                <div className="">
                    <ProductImg cartProduct={cartProduct} product={product} handleColorSelect={handleColorSelect} />
                </div>

                {/* Right side with product details */}
                <div className="flex flex-col gap-1 text-gray-700 text-sm border border-green-500 p-5 rounded-xl"> {/* Adjusted text color to a neutral gray */}

                    <h2 className='text-2xl font-semibold'>{product.name}</h2> {/* Darkened text color for better contrast */}
                    <div className='text-lg font-bold text-gray-800'>{formatPrice(product.price)}</div>
                    <div className='flex items-center '>
                        <Rating value={productRating} readOnly />
                        <div className='text-gray-600 ml-2'>{product.reviews.length} reviews</div>
                    </div>
                    <hr className='w-[30%] my-2' />
                    <div className='text-gray-700 mb-4 text-justify'>{product.description}<Link href='#pd'>read more</Link></div>
                    <hr className='w-[30%] my-2' />
                    <div>
                        <span className='font-bold'>CATEGORY:</span> {product.category}
                    </div>
                    <div>
                        <span className='font-bold'>BRAND:</span> {product.brand}
                    </div>
                    <div className={product.inStock ? "text-green-500" : "text-red-500 mb-4"}>{product.inStock ? 'In stock' : 'Out of stock'}</div> {/* Adjusted colors for in stock and out of stock */}
                    <hr className='w-[30%] my-2' />
                    <span className="text-yellow-500 block mb-4">Product added to cart</span>
                    <div className="border p-4 shadow-md bg-white">
                        {isProductInCart &&
                            <>
                                <p className="text-green-500 flex items-center gap-2">
                                    check_circle
                                </p>
                            </>
                        }
                        <>
                            <SetColor cartProduct={cartProduct} images={product.images} handleColorSelect={handleColorSelect} />
                            <hr className='w-[30%] my-2' />
                            {/* Quantity section begins */}
                            {/* End of quantity section */}
                        </>
                    </div>
                </div>

                <div className="mb-4  flex flex-col gap-4 md:col-span-2 lg:col-span-1">
                    <div className="max-w-[400px] bg-green-200 p-5 rounded-xl gap-5 flex flex-col max-lg:max-w-full ">
                        <p className="text-lg font-semibold text-green-700">Fast Delivery</p>
                        <p className="text-lg font-semibold text-green-700">Up to Three Days</p>
                        <SetQuantity cartProduct={cartProduct} handleQtyDecrease={handleQuantityDecrease} handleQtyIncrease={handleQuantityIncrease} />
                        <div className="flex flex-col gap-2 justify-between items-center">
                            {!isProductInCart ?
                                <button className="bg-green-500 w-full text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300" onClick={() => handleAddToCart(cartProduct)}>
                                    Add To Cart
                                </button> :
                                <button className="bg-green-500 w-full text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300" onClick={() => router.push("/cart")} >
                                    View Cart
                                </button>}
                            {!isProductInWishList ?
                                <button className="bg-green-500 w-full text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300" onClick={() => handleAddToWishList(cartProduct)}>
                                    Add to Wishlist
                                </button> :
                                <button className="bg-green-500 w-full text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300" onClick={() => router.push("/wishList")}>
                                    View Wishlist
                                </button>}
                        </div>
                    </div>
                    <div className='max-w-[400px]  shadow-md p-5 rounded-xl gap-5 flex flex-col max-lg:max-w-full'><ListRating product={product} /></div>
                </div>
            </div>
            {/*<div className="col-span-1 md:col-span-2 mt-10 md:mt-20 text-left text-pretty text-balance text-wrap w-full md:w-3/4 lg:w-[800px] mx-auto">
    <p className="text-green-300 text-lg font-semibold mb-4 text-center">Product Description</p>
    <p className="text-gray-400" id="pd">{product.description}</p>
                </div>*/}
            <div className='mx-auto'>
                <div className='flex-1'><AddRating user={user} product={product} /> </div>
            </div>

            <div>
                <div className="container  my-8 col-span-2">
                    <h1 className="text-3xl font-bold mb-6 max-sm:text-cen
          ter">Related Products</h1>

                    <Slider
                        {...sliderSettings} >
                        {relatedProducts.map((relatedProduct) => {



                            return <div key={relatedProduct.id} className="grid-cols-6 relative group hover:shadow-md hover:scale-110 p-4  overflow-hidden">
                                <Image
                                    src={relatedProduct.images[0].image} // Replace with the correct path to your image
                                    alt={relatedProduct.name}
                                    width={200}
                                    height={200}
                                    className="w-full h-40 object-cover mb-2  group-hover:opacity-75 transition duration-300 ease-in-out"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 hover:translate-y-0 transition duration-500 ease-in-out    ">
                                    <button className="bg-white text-green-500 px-4 py-2  w-full hover:bg-green-500 hover:text-white transform translate-y-4 hover:translate-y-0 transition duration-300 ease-in-out">
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-600"> {relatedProduct.catagory}</p>
                                    <h2 className="text-lg font-semibold mb-2 text-[#333333] text-[15.488px] line-clamp-1 hover:line-clamp-3">{relatedProduct.name}</h2>
                                    <p className="text-gray-600 mb-2 text-green-500 ">${relatedProduct.price}</p>
                                    <p className="text-gray-600 opacity-40">(Reviews: {relatedProduct.reviews.length})</p>
                                </div>

                            </div>

                        })}
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default ProductDetails