import React from "react";
import Hero from "@/components/hero";
import FrontPage from "@/components/front-page";
import HookTest from "@/components/hooktest";

const SalonPage: React.FC = () => {
  return (
      <main>
        <Hero />
        <FrontPage />
        <HookTest />
      </main>
  );
};

export default SalonPage;
