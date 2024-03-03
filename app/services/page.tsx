import React from 'react';


const SalonPage: React.FC = () => {

  const serviceStyle ="transition ease-in-out cursor-pointer bg-white hover:rounded-lg hover:scale-105 rounded shadow-lg p-6"

  return (
    <main className="min-h-screen p-10" style={{
      backgroundImage: "url('/images/img-adam-winger-KVVjmb3IIL8-unsplash.png')",
      backgroundAttachment: "local",
      backgroundSize: "contain",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#f3f4f6"
    }}>
      <h1 className="text-4xl font-bold mb-8">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className={`${serviceStyle}`}>
          <h2 className="text-xl font-bold mb-4">Haircut</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam lacinia, urna nunc lacinia arcu, nec tincidunt nunc enim id lectus.</p>
        </div>
        <div className={`${serviceStyle}`}>
          <h2 className="text-xl font-bold mb-4">Coloring</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam lacinia, urna nunc lacinia arcu, nec tincidunt nunc enim id lectus.</p>
        </div>
        <div className={`${serviceStyle}`}>
          <h2 className="text-xl font-bold mb-4">Styling</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam lacinia, urna nunc lacinia arcu, nec tincidunt nunc enim id lectus.</p>
        </div>
        <div className={`${serviceStyle}`}>
          <h2 className="text-xl font-bold mb-4">Massage</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam lacinia, urna nunc lacinia arcu, nec tincidunt nunc enim id lectus.</p>
        </div>
        <div className={`${serviceStyle}`}>
          <h2 className="text-xl font-bold mb-4">Facial</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam lacinia, urna nunc lacinia arcu, nec tincidunt nunc enim id lectus.</p>
        </div>
        <div className={`${serviceStyle}`}>
          <h2 className="text-xl font-bold mb-4">Manicure</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam lacinia, urna nunc lacinia arcu, nec tincidunt nunc enim id lectus.</p>
        </div>
      </div>
    </main>
  );
};

export default SalonPage;;