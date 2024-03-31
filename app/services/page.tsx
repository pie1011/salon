"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const SalonPage: React.FC = () => {

  const [showModal, setShowModal] = React.useState(false);

  const serviceStyle ="relative transition ease-in-out cursor-pointer bg-white rounded shadow-md p-6 hover:rounded-lg hover:shadow-xl hover:scale-105"
  const serviceBook = "absolute top-0 right-0 right-0 text-pink-600 uppercase my-6 mx-10 transition ease-in-out opacity-0"

  // function to show and hide the book now button
  const showServiceBook = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.lastElementChild?.classList.add("opacity-100")
  }
  const hideServiceBook = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.lastElementChild?.classList.remove("opacity-100")
  }

  const services = [
    {
      title: "Haircut",
      description: "A haircut is a styling technique where the hair is cut shorter to achieve a desired length or style."
    },
    {
      title: "Coloring",
      description: "Coloring is a process of changing the color of the hair using dyes or other coloring agents."
    },
    {
      title: "Styling",
      description: "Styling involves creating a desired look or shape for the hair using various techniques and tools."
    },
    {
      title: "Massage",
      description: "Massage is a therapeutic technique that involves manipulating the muscles and soft tissues of the body to promote relaxation and relieve tension."
    },
    {
      title: "Facial",
      description: "A facial is a skincare treatment that involves cleansing, exfoliating, and nourishing the skin to improve its appearance and overall health."
    },
    {
      title: "Manicure",
      description: "A manicure is a beauty treatment for the hands and nails, which typically includes shaping, filing, and polishing the nails."
    }
  ];

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
        {services.map((service, index) => (
          <div className={`${serviceStyle}`} onMouseEnter={showServiceBook} onMouseLeave={hideServiceBook} key={index} onClick={() => setShowModal(true)} >
            <h2 className="text-xl font-bold mb-4">{service.title}</h2>
            <p title="description" className="text-gray-600">{service.description}</p>
            <p className={`${serviceBook}`} ><FontAwesomeIcon icon={faCalendarDays} /> Book Now</p>
          </div>
        ))}
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Book Appointment
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    This is where the form will go to book an appointment.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </main>
  );
};

export default SalonPage;