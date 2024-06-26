"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";

export default function DashUser() {

  const { isSignedIn, user } = useUser();
  const primaryEmailAddress = user?.primaryEmailAddress?.emailAddress

  return (
    <main className="xl:m-10 xl:p-10 m-2 p-2 ">
      {isSignedIn ? (
        <div>
          <h3 className="text-2xl font-bold">Hello, {user?.firstName} ({primaryEmailAddress})</h3>
        </div>
      ) : (
        <h2 className="text-2xl font-bold">Hello, Guest</h2>
      )}
    </main>
  );
};

