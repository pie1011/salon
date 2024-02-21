import React from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import FrontPage from "@/components/front-page";
import FooterText from "@/components/footer-text";
import FooterSticky from "@/components/footer-sticky";

const SalonPage: React.FC = () => {
  return (
    <div className="bg-white text-slate-600">
      <header className="bg-white drop-shadow-xl shadow-xl sticky top-0">
        <Navigation />
      </header>
      <Hero />
      <FrontPage />
      <FooterText />
      <FooterSticky />
    </div>
  );
};

export default SalonPage;
