import React from "react";
import { prisma } from "@/lib/prisma";
import DashUser from "@/components/dash-user";
import Customers from "@/components/dash-customers";
import Appointments from "@/components/dash-appointments";
import DashApptsTable from "@/components/dash-appts-table";

// https://blog.logrocket.com/creating-react-sortable-table/

export default async function Dashboard() {

  const customers = await prisma.customer.findMany();
  const appointmentList = await prisma.appointment.findMany(
    {
      include: {
        stylist: { select: { stylistEmail: true } },
        services: { include: { appointments: true } },
        customer: { select: { name: true, email: true, phone: true } }
      }
    }
  );

  const appointmentListFlat = appointmentList.flatMap(appointment => {
    return {
      date: appointment.date.toDateString(),
      confirmed: appointment.confirmed.toString(),
      appointmentId: appointment.id,
      services: appointment.services.map(service => service.name).join(", "),
      stylistEmail: appointment.stylist.stylistEmail,
      customerName: appointment.customer.name,
      customerEmail: appointment.customer.email,
      customerPhone: appointment.customer.phone,
    };
  });

  return (
    <main className="min-h-screen p-10 bg-gradient-to-b from-teal-400/50 to-white">
      <div className="container-fluid flex flex-row flex-wrap justify-content-top m-0 ">

        <DashApptsTable appointmentList={appointmentListFlat} />
      </div>
    </main>
  );
}
{/* <DashUser />
<Appointments appointmentList={appointmentList} />
<Customers customerList={customers} /> */}

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
