'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const HeroSlider = () => {
  const images = ['camera.jpg', 'shoes.jpg', 'laptop.jpg',"hero.jpg"]; // replace with your image paths

  return (
    <div className="relative w-[500px] m-auto">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
      >
        {images.map((image, index) => (
          <div key={index} className="h-96">
            <img src={image} alt="" className="w-[100px] h-full object-fit" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider
