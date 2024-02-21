'use client'
import React, { useEffect } from 'react';
// import Image from "next/image";

export default function Hero() {

    // This is a custom hook that listens for scroll events and changes the width of the hero shapes
    useEffect(() => {
        const scrollFunction = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById("heroShapes")!.style.width = "125%";
                document.getElementById("heroShapes")!.style.left = "-200px";
            } else {
                document.getElementById("heroShapes")!.style.width = "100%";
                document.getElementById("heroShapes")!.style.left = "0";
            }
        };

        window.onscroll = scrollFunction;

        // Cleanup function to remove the event listener when component unmounts
        return () => {
            window.onscroll = null;
        };
    }, []);

  return (
    <div className="min-h-screen flex flex-col justify-start lg:justify-center p-0 bg-dark overflow-hidden hero-bg">
      <div className="flex flex-col w-full hero-container">
        <div className="container mx-auto mt-1 lg:w-3/4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-bold text-white hero-header">
            Welcome
          </h1>
        </div>
        <div className="container mx-auto my-3">
          <p className="text-lg md:text-xl lg:text-2xl text-center md:text-left text-dark hero-text">
            To more fully clarify the current exchange a few aggregate issues
            will require addressing to facilitate this distributed communication
            venue.
          </p>
        </div>
      </div>
      <div className="hidden lg:block hero-shapes" id="heroShapes"></div>
    </div>
  );
};
