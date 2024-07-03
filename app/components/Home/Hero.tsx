'use client'
import React from 'react';
import Image from 'next/image';
import heroimg from '@/public/images/hero.png';

const Hero = () => {
  return (
    <div className="bg-teal-500 text-white md:flex">
      <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold">Main Title</h1>
          <p className="text-lg md:text-xl text-center mt-4">Description text goes here</p>
          <input type="text" placeholder="Search..." className="w-full md:w-3/4 px-4 py-2 rounded mt-8 border-none outline-none"/>
      </div>
      <div className="hidden md:block md:w-1/2 bg-teal-500 bg-cover bg-center">
        <Image
          src={heroimg}
          className="w-full h-full object-cover"
          width={700}
          height={500}
          alt="heroImg"
        />
      </div>
  </div>
  );
}

export default Hero