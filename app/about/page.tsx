import React from "react";
import Image from "next/image";
import { pacifico } from "@/app/fonts";

const SalonPage: React.FC = () => {
  const heroHeaderClass =
    "text-4xl md:text-5xl lg:text-6xl xl:ml-20 md:ml-10 p-2 pl-4 md:pl-8 text-left md:text-left font-bold text-[#565584]";
  const aboutText =
    "text-xl md:text-3xl tracking-wide uppercase text-teal-700/75";

  return (
    <main className="min-h-screen p-10 bg-gradient-to-b from-teal-400/50 to-white">
      <div className="container-fluid flex flex-col sm:flex-row-reverse m-0 p-0 shadow-xl ">
        <div className="container m-0 p-0">
          <Image
            src="/images/adam-winger-WXmHwPcFamo-unsplash.jpeg"
            alt="Services Image - Adam Winger"
            className="w-full"
            width={1920}
            height={1280}
          />
        </div>
        <div className="container flex flex-col justify-center items-center px-0 py-1 bg-white">
          <div className="container-md w-3/4 py-2 text-left" id="services">
            <h1 className={` ${aboutText}`}>About Us</h1>
            <p>
              At The Salon, we are committed to providing the best salon
              services to our customers. Our team of professional stylists and
              beauty experts are dedicated to helping you look and feel your
              best. Whether you need a haircut, coloring, styling, massage,
              facial, or manicure, we have the skills and expertise to meet your
              needs. We take pride in delivering high-quality services in a warm
              and welcoming environment. Visit us today and experience the
              difference at Salon.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid flex flex-col sm:flex-row p-0 m-0 shadow-xl">
        <div className="container m-0 p-0">
          <Image
            src="/images/img-greg-trowman-jsuWg7IXx1k-unsplash.jpg"
            alt="About Us Image - Greg Trowman"
            className="w-full"
            width={1920}
            height={1280}
          />
        </div>
        <div className="container flex flex-col justify-center items-center px-0 py-3 bg-white">
          <div className="container-md w-3/4 px-1 px-md-2 py-2 text-left ">
            <h1 className={`${aboutText}`}>Hours</h1>
            <ul className="list-none">
              <li>Monday: 10 AM - 9 PM</li>
              <li>Tuesday: 10 AM - 9 PM</li>
              <li>Wednesday: 10 AM - 9 PM</li>
              <li>Thursday: 10 AM - 9 PM</li>
              <li>Friday: 10 AM - 9 PM</li>
              <li className="font-bold">Saturday: 10 AM - 6 PM</li>
              <li className="font-bold">Sunday: CLOSED</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SalonPage;
