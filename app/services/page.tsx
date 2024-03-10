"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const SalonPage: React.FC = () => {

  const serviceStyle ="relative transition ease-in-out cursor-pointer bg-white rounded shadow-md p-6 hover:rounded-lg hover:shadow-xl hover:scale-105"
  const serviceBook = "absolute top-0 right-0 right-0 text-pink-600 uppercase my-6 mx-10 transition ease-in-out opacity-0"

  // function to show and hide the book now button
  const showServiceBook = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.lastElementChild?.classList.add("opacity-100")
  }
  const hideServiceBook = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.lastElementChild?.classList.remove("opacity-100")
  }

  return (
    <main className="min-h-screen p-10" style={{
      backgroundImage: "url('/images/img-adam-winger-KVVjmb3IIL8-unsplash.png')",
      backgroundAttachment: "local",
      backgroundSize: "contain",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#fff1f2"
    }}>
      <h1 className="text-4xl font-bold mb-8">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className={`${serviceStyle}`} onMouseEnter={showServiceBook} onMouseLeave={hideServiceBook}>
          <h2 className="text-xl font-bold mb-4">Haircut</h2>
          <p title="description" className="text-gray-600">A haircut is a styling technique where the hair is cut shorter to achieve a desired length or style.</p>
          <p className={`${serviceBook}`} ><FontAwesomeIcon icon={faCalendarDays} /> Book Now</p>
        </div>
        <div className={`${serviceStyle}`} onMouseEnter={showServiceBook} onMouseLeave={hideServiceBook}>
          <h2 className="text-xl font-bold mb-4">Coloring</h2>
          <p title="description" className="text-gray-600">Coloring is a process of changing the color of the hair using dyes or other coloring agents.</p>
          <p className={`${serviceBook}`} ><FontAwesomeIcon icon={faCalendarDays} /> Book Now</p>

        </div>
        <div className={`${serviceStyle}`} onMouseEnter={showServiceBook} onMouseLeave={hideServiceBook}>
          <h2 className="text-xl font-bold mb-4">Styling</h2>
          <p title="description" className="text-gray-600">Styling involves creating a desired look or shape for the hair using various techniques and tools.</p>
          <p className={`${serviceBook}`} ><FontAwesomeIcon icon={faCalendarDays} /> Book Now</p>
        </div>
        <div className={`${serviceStyle}`} onMouseEnter={showServiceBook} onMouseLeave={hideServiceBook}>
          <h2 className="text-xl font-bold mb-4">Massage</h2>
          <p title="description" className="text-gray-600">Massage is a therapeutic technique that involves manipulating the muscles and soft tissues of the body to promote relaxation and relieve tension.</p>
          <p className={`${serviceBook}`} ><FontAwesomeIcon icon={faCalendarDays} /> Book Now</p>
        </div>
        <div className={`${serviceStyle}`} onMouseEnter={showServiceBook} onMouseLeave={hideServiceBook}>
          <h2 className="text-xl font-bold mb-4">Facial</h2>
          <p title="description" className="text-gray-600">A facial is a skincare treatment that involves cleansing, exfoliating, and nourishing the skin to improve its appearance and overall health.</p>
          <p className={`${serviceBook}`} ><FontAwesomeIcon icon={faCalendarDays} /> Book Now</p>
        </div>
        <div className={`${serviceStyle}`} onMouseEnter={showServiceBook} onMouseLeave={hideServiceBook}>
          <h2 className="text-xl font-bold mb-4">Manicure</h2>
          <p title="description" className="text-gray-600">A manicure is a beauty treatment for the hands and nails, which typically includes shaping, filing, and polishing the nails.</p>
          <p className={`${serviceBook}`} ><FontAwesomeIcon icon={faCalendarDays} /> Book Now</p>
        </div>
      </div>
    </main>
  );
};

export default SalonPage;;