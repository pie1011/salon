"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";

interface AppointmentsProps {
    appointmentList: any[];
}

export default function Appointments({ appointmentList }: AppointmentsProps) {

  const { isSignedIn, user } = useUser();
  console.log(appointmentList)

  return (
    <main>
      <div>appointments</div>
      {isSignedIn ? (
        <h2 className="text-2xl font-bold">Hello, {user?.firstName}</h2>
      ) : (
        <h2 className="text-2xl font-bold">Hello, Guest</h2>
      )}
      {appointmentList.map((appointment) => (
        <div key={appointment.id}>
          <h3>Appointment: {appointment.confirmed}</h3>
        </div>
      ))}
    </main>
  );
};

