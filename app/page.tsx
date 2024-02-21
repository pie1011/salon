import React from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

const SalonPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Navigation />
      <Hero />

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to our Salon</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          tortor nec consectetur tincidunt, mauris lectus aliquet nunc, id
          tincidunt nisl mauris et velit. Sed euismod, tortor nec consectetur
          tincidunt, mauris lectus aliquet nunc, id tincidunt nisl mauris et
          velit.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default SalonPage;
