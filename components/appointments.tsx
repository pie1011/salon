"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";

interface AppointmentsProps {
    appointmentList: any[];
    serviceList: any[];
}

export default function Appointments({ appointmentList }: AppointmentsProps) {

  const { isSignedIn, user } = useUser();
  console.log(appointmentList);

  return (
    <main className="w-full border">
      {isSignedIn ? (
        <h2 className="text-2xl font-bold">Hello, {user?.firstName}</h2>
      ) : (
        <h2 className="text-2xl font-bold">Hello, Guest</h2>
      )}
      <table className="table-auto border w-full">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Customer Phone</th>
            <th>Date</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
          {appointmentList.map((appointment: any) => (
            <tr key={appointment.id}>
              <td>{appointment.customer.name}</td>
              <td>{appointment.customer.email}</td>
              <td>{appointment.customer.phone}</td>
              <td>{appointment.date.toDateString()}</td>
              <td>
                {appointment.services.map((service: any) => (
                  <p key={service.id}>{service.name}</p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

