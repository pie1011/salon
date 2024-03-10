"use client"
import React, { useState } from "react";

interface AppointmentsProps {
  appointmentList: any[];
}

export default function SortAppointments({ appointmentList }: AppointmentsProps) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = () => {
    const sortedList = [...appointmentList].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.date - b.date;
      } else {
        return b.date - a.date;
      }
    });

    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    appointmentList = sortedList;
  };

  return (
    <main className="shadow-lg bg-white xl:m-10 xl:p-10 m-2 p-2 ">
      <h2>Appointments</h2>
      <table className="table-auto border w-full text-sm">
        <thead className="text-left">
          <tr>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Customer Phone</th>
            <th>
              <button onClick={handleSort}>
                Date {sortOrder === "asc" ? "▲" : "▼"}
              </button>
            </th>
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
                  <span key={service.id}>{service.name} </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
