'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Image from 'next/image';
const HeroSlider = () => {
  const images = ['f.jpg','/ff.jpg']; // replace with your image paths

  return (
    <div className="relative w-full max-w-[1300px] h-full mx-auto my-10">
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={5000}
    >
      {images.map((image, index) => (
        <div key={index} className="h-full">
          <img
            src={image}
            alt="image"
            className="w-full h-auto object-contain"
          />
        </div>
      ))}
    </Carousel>
  </div>
  
  );
};

export default HeroSlider