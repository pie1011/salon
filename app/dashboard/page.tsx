import React from "react";
import { prisma } from "@/lib/prisma";
import DashUser from "@/components/dash-user";
import Customers from "@/components/dash-customers";
import Appointments from "@/components/dash-appointments";

export default async function Dashboard() {

  const customers = await prisma.customer.findMany();
  const appointmentList = await prisma.appointment.findMany(
    {
      include: {
        customer: true,
        stylist: { select: { stylistEmail: true } },
        services: { include: { appointments: true } }
      }
    }
  );

  return (
    <main className="min-h-screen p-10 bg-gradient-to-b from-teal-400/50 to-white">
      <div className="container-fluid flex flex-row flex-wrap justify-content-top m-0 ">
        <DashUser />
        <Appointments appointmentList={appointmentList} />
        <Customers customerList={customers} />
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
