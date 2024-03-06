import React from "react";
import { SignIn } from "@clerk/nextjs";

const SignInPage: React.FC = () => {
  return (
    <main className="static flex justify-center min-h-screen bg-gradient-to-b from-teal-400/50 to-white text-slate-700">
      <div className="pt-10">
        <SignIn />
      </div>
    </main>
  );
};

export default SignInPage;
