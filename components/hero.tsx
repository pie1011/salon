// "use client";
import React from "react";
import { pacifico } from "@/app/fonts";

export default function Hero() {
  const heroHeaderClass =
    "text-4xl md:text-5xl lg:text-6xl xl:ml-20 md:ml-10 p-2 pl-4 md:pl-8 text-left md:text-left font-bold text-metal";
  const heroTextClass =
    "text-lg  md:text-xl  lg:text-2xl xl:ml-20 md:ml-10 mr-20 p-2 pl-4 md:pl-8 text-left font-light text-dark max-w-prose";

  return (
    <main
      className="container-fluid min-h-screen flex flex-col md:justify-center md:items-left p-8 bg-dark overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      <div className="text-center md:text-left">
      <h1 className={` ${heroHeaderClass} ${pacifico.className}`}>Welcome</h1>
        <p className={heroTextClass}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
          molestias exercitationem iste soluta voluptate velit unde, aliquam
          saepe ea ipsa est hic neque veniam culpa molestiae quo assumenda quam
          inventore.
        </p>
      </div>
    </main>
  );
}
