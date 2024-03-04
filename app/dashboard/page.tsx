import React from "react";
import { prisma } from "@/lib/prisma";
import Appointments from "@/components/appointments";


export default async function Dashboard() {
  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: "user1@example.com"
  //   },
  // });

  const customers = await prisma.customer.findMany();
  const appointmentList = await prisma.appointment.findMany(
    {
      include: {
        customer: true,
        services: { include: { appointments: true } }
      }
    }
  );
  const serviceList = await prisma.service.findMany();

  return (
    <main className="min-h-screen p-10 bg-gradient-to-b from-teal-400/50 to-white">
      <div className="container-fluid flex flex-col m-0 p-10 shadow bg-white">
        <Appointments appointmentList={appointmentList} serviceList={serviceList} />
        <table className="table-auto border">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Customer Phone</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer: any) => ( 
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

// model User {
//   id           Int           @id @default(autoincrement())
//   email        String        @unique
//   name         String
//   appointments Appointment[]
// }

// model Appointment {
//   id        Int     @id @default(autoincrement())
//   confirmed Boolean
//   user      User    @relation(fields: [userId], references: [id])
//   userId    Int
//   services  Service[]
//   customer  Customer[]
// }

// model Service {
//   id        Int     @id @default(autoincrement())
//   name      String
//   description String
//   price     Float
//   duration  Int
//   appointments Appointment[]
//   }

// model Customer {
//   id        Int     @id @default(autoincrement())
//   name      String
//   email     String
//   phone     String
//   ccard     String
//   appointments Appointment[]
// }
