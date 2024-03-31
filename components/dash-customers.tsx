"use client";
import React from "react";
// import { useSortableTable } from "@/lib/hooks/useSortableTable";

interface CustomersProps {
    customerList: any[];
}

export default function Customers({ customerList }: CustomersProps) {
  return (
    <main className="shadow-lg bg-white xl:m-10 xl:p-10 m-2 p-2 shadow-lg">
      <h2>Customers</h2>
        <table className="table table-auto border w-full text-sm ">
          <thead>
            <tr className="border-b border-slate-400 text-left">
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Customer Phone</th>
            </tr>
          </thead>
          <tbody>
            {customerList.map((customer: any) => ( 
              <tr key={customer.id} >
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </main>
  );
};

