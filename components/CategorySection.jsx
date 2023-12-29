
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
    centerMode: true,
centerPadding: '10px',
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
    <div>
                <div className="container  my-8 col-span-2">
                    <h1 className="text-3xl font-bold mb-6 max-sm:text-cen
          ter">Popular categories</h1>

                    <Slider
                        {...sliderSettings} >
                        {catagories.map((cat) => {



                            return <div key={cat.id} className="grid-cols-6 relative group hover:shadow-md hover:scale-110 p-4  overflow-hidden">
                                <Image
                                    src={cat.img} // Replace with the correct path to your image
                                    alt={cat.label}
                                    width={200}
                                    height={200}
                                    className="w-full h-40 object-cover mb-2  group-hover:opacity-75 transition duration-300 ease-in-out"
                                />
                               
                                <div className="text-center">
                                    <p className="text-2xl font-semibold mb-2 text-[#333333] text-center">{cat.label}</p>
                                </div>

                            </div>

                        })}
                    </Slider>
                </div>
            </div>
  
  )
}

export default CategorySection