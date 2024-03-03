"use client";
import React from "react";
import { SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";

const StylistAccess: React.FC = () => {
  const footerHeading =
    "text-xl md:text-3xl font-serif tracking-wide uppercase text-teal-600";

  const buttonStyle =
    "rounded cursor-pointer hover:text-white hover:bg-teal-600 bg-teal-500/25 p-2 mt-2 uppercase tracking-wide text-extrabold";

  return (
    <div className="rounded m-4 bg-white shadow-lg">
      <div className="flex flex-col text-center px-2 pb-2 pt-4 m-5">
        <h1 className={` ${footerHeading} `}>Stylist Access</h1>

        {/* Links to sign in or sign up */}
        <SignedOut>
          <div className="flex flex-col p-2">
            <SignInButton mode="modal">
            <button className={` ${buttonStyle} `}>
                Sign in
              </button>
            </SignInButton>
            <SignUpButton>
              <button className={` ${buttonStyle} `}>
                Sign up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};

export default StylistAccess;
