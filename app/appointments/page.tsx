import React from "react";
import Navigation from "@/components/navigation";
import Appointments from "@/components/appointments";
import FooterText from "@/components/footer-text";
import FooterSticky from "@/components/footer-sticky";


const SalonPage: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-teal-400/50 to-white text-slate-700">
      <header className="absolute bg-white drop-shadow shadow-xl sticky top-0">
        <Navigation />
      </header>
      <main
        style={{
          backgroundImage:
            "url('/images/img-adam-winger-KVVjmb3IIL8-unsplash.png')",
          backgroundAttachment: "local",
            backgroundSize: "contain",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Appointments />
      </main>
      <footer className="shadow sticky">
        <FooterText />
      </footer>
      <FooterSticky />
    </div>
  );
};

export default SalonPage;