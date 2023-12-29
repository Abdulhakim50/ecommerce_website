
'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { catagories } from '@/utils/Catagories'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const CategorySection = () => {
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
    <div className="container">
    <h1 className='text-center text-2xl font-bold'>Popular category</h1>
    <Slider {...sliderSettings}>
      {catagories.map((cat) => (
        <div key={cat.label} className="hover:shadow-md hover:scale-110 p-4 overflow-hidden">
          <Image src={cat.img} width={200} height={200} className='w-full h-40 object-cover mb-2 group-hover:opacity-75 transition duration-300 ease-in-out' />
          <p className='text-center'>{cat.label}</p>
        </div>
      ))}
    </Slider>
  </div>
  
  )
}

export default CategorySection