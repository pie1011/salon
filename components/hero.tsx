// "use client";
import React from "react";
import { pacifico } from "@/app/fonts";

export default function Hero() {
  const heroHeaderClass =
    "text-4xl md:text-5xl lg:text-6xl xl:ml-20 md:ml-10 p-2 pl-4 md:pl-8 text-left md:text-left font-bold text-[#565584]";
  const heroTextClass =
    "rounded-lg text-lg  md:text-xl  lg:text-2xl xl:ml-20 md:ml-10 mr-20 p-2 pl-4 md:pl-8 text-left font-light text-dark max-w-prose";

  return (
    <main>
      <div
        className="container-fluid min-h-screen flex flex-col md:justify-center md:items-left p-8 bg-dark overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
        <div className="rounded text-center md:text-left m-2 p-8 xl:pr-40 xl:pl-20 bg-gradient-to-b md:bg-gradient-to-r from-white to-white-100/0 ">
          <h1 className={` ${heroHeaderClass} ${pacifico.className}`}>
            Welcome
          </h1>
          <p className={heroTextClass}>
            Discover the latest trends in hair styling and beauty at The Salon. 
            Our team of expert stylists and technicians are dedicated to providing you with exceptional service and a personalized experience. 
            Whether you&apos;re looking for a new haircut, color treatment, or a relaxing spa treatment, we&apos;ve got you covered. 
            Visit us today and let us help you look and feel your best.
          </p>
        </div>
      </div>
    </main>
  );
}
