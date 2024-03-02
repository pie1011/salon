'use client'
import React from "react";
import Appointments from "@/components/appointments";


const SalonPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-400/50 to-white text-slate-700">

      <Appointments feed={[]} />

    </main>
  );
};

export default SalonPage;
