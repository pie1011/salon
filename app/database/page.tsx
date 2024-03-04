import React from "react";
import { prisma } from "@/lib/prisma";

export default async function Database() {

  const user = await prisma.user.findUnique({
    where: {
      email: "user1@example.com"
    },
  });

  return (
    <main className="min-h-screen p-10 bg-gradient-to-b from-teal-400/50 to-white">
      <div className="container-fluid flex flex-col m-0 p-10 shadow bg-white">
        <p>Hello, {user?.name}</p>
      </div>
    </main>
  );
};

