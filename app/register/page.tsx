import React from "react";
import { SignUp } from "@clerk/nextjs";

const RegisterPage: React.FC = () => {
  return (
    <main className="static flex justify-center min-h-screen bg-gradient-to-b from-teal-400/50 to-white text-slate-700">
      <div className="pt-10">
        <SignUp />
      </div>
    </main>
  );
};

export default RegisterPage;
