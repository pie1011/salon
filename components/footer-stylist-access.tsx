"use client";
import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignOutButton,
  useUser,
} from "@clerk/nextjs";

const StylistAccess: React.FC = () => {
  const footerHeading =
    "text-xl md:text-3xl font-serif tracking-wide uppercase text-teal-600";
  const buttonStyle =
    "rounded-md cursor-pointer hover:text-white hover:bg-teal-600 bg-teal-500/25 p-2 mt-2 uppercase tracking-wide text-extrabold";

  const { isSignedIn, user } = useUser();

  return (
    <div className="rounded-lg m-4 lg:px-10 bg-white shadow-xl">
      <div className="flex flex-col text-center px-2 pb-2 pt-4 m-5">
        <h1 className={` ${footerHeading} `}>Stylist Access</h1>

        {/**** START USER SIGNED IN OR OUT ****/}
            {isSignedIn ? (
              <div className="flex flex-col p-2">
                <p>Welcome {user.firstName}!</p>
                <SignInButton mode="modal">
                  <button className={buttonStyle}>View Account</button>
                </SignInButton>
                <SignOutButton>
                  <button className={buttonStyle}>Sign Out</button>
                </SignOutButton>
              </div>
            ) : (
              <div className="flex flex-col p-2">
                <p>Sign in or sign up to access your account.</p>
                <SignInButton mode="modal">
                  <button className={` ${buttonStyle} `}>Sign in</button>
                </SignInButton>
                <SignUpButton>
                  <button className={` ${buttonStyle} `}>Sign up</button>
                </SignUpButton>
              </div>
            )}
          </div>
        {/**** END USER SIGNED IN OR OUT ****/}

    </div>
  );
};

export default StylistAccess;
