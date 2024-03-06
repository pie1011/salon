import React from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import FrontPage from "@/components/front-page";
import FooterText from "@/components/footer-text";
import FooterSticky from "@/components/footer-sticky";

const SalonPage: React.FC = () => {
  return (
    <div className="relative bg-white text-slate-600">
      <header className="absolute bg-white drop-shadow shadow-xl sticky top-0">
        <Navigation />
      </header>
      <main>
        <Hero />
        <FrontPage />
      </main>

      <footer className="shadow sticky">
        <FooterText />
      </footer>
      <FooterSticky />
    </div>
  );
};

export default SalonPage;
