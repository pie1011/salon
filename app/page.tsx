import React from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import FrontPage from "@/components/front-page";
import FooterText from "@/components/footer-text";
import FooterSticky from "@/components/footer-sticky";

const SalonPage: React.FC = () => {
  return (
      <main>
        <Hero />
        <FrontPage />
      </main>
  );
};

export default SalonPage;
