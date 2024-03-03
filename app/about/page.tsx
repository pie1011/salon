import React from "react";

const SalonPage: React.FC = () => {
  return (
    <main
      className="min-h-screen p-10 bg-gradient-to-b from-teal-400/50 to-white"
      style={{
        backgroundImage:
          "url('/images/averie-woodard-4nulm-JUYFo-unsplash-crop.jpeg')",
        backgroundAttachment: "local",
        backgroundSize: "cover",
        backgroundPosition: "left bottom",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div className="h-100 flex flex-col content-bottom">
        <div className="xl:mt-60 lg:mt-40"></div>
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-white/50 backdrop-blur-sm p-5 ">
          <p>
            At The Salon, we are committed to providing the best salon services
            to our customers. Our team of professional stylists and beauty
            experts are dedicated to helping you look and feel your best.
            Whether you need a haircut, coloring, styling, massage, facial, or
            manicure, we have the skills and expertise to meet your needs. We
            take pride in delivering high-quality services in a warm and
            welcoming environment. Visit us today and experience the difference
            at Salon.
          </p>
        </div>
      </div>
    </main>
  );
};

export default SalonPage;
