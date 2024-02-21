'use client'
import React, { useEffect } from 'react';
import { pacifico, roboto } from '@/app/fonts';

export default function Hero() {

    const heroHeaderClass = "text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-bold text-white hero-header";
    const heroTextClass = "text-lg md:text-xl lg:text-2xl text-center md:text-left text-dark hero-text";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-0 bg-dark overflow-hidden hero-bg"
    style={{ backgroundImage: "/images/hero-bg.jpg" }}
    >
      <div className="flex flex-col w-full hero-container">
        <div className="container mx-auto mt-1 lg:w-3/4">
          <h1 className={` ${heroHeaderClass} ${pacifico.className}`}>Welcome</h1>

        </div>
        <div className="container mx-auto my-3">
          <p className={` ${heroTextClass} ${roboto.className}`}>
            To more fully clarify the current exchange a few aggregate issues
            will require addressing to facilitate this distributed communication
            venue.
          </p>
        </div>
      </div>
      {/* <div className="hidden lg:block hero-shapes" id="heroShapes"></div> */}
    </div>
  );
};
