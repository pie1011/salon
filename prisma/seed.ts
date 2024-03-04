import { PrismaClient } from '@prisma/client';
import { Appointment } from '@prisma/client';


const prisma = new PrismaClient()

// schema.prisma

// generator client {
//     provider = "prisma-client-js"
//   }
  
//   datasource db {
//     provider  = "postgresql"
//     url       = env("POSTGRES_PRISMA_URL") // uses connection pooling
//     directUrl = env("POSTGRES_URL_NON_POOLING") // uses a direct connection
//   }
  
//   model User {
//     id           Int           @id @default(autoincrement())
//     email        String        @unique
//     name         String
//     appointments Appointment[]
//   }
  
//   model Appointment {
//     id        Int     @id @default(autoincrement())
//     customer  String
//     confirmed Boolean
//     user      User    @relation(fields: [userId], references: [id])
//     userId    Int
//     services  Service[]
//   }
  
//   model Service {
//     id        Int     @id @default(autoincrement())
//     name      String
//     price     Float
//     duration  Int
//     appointments Appointment[]
//     }
  
async function main() {
    console.log('Seeding database...');

    // Create mock users
    const user1 = await prisma.user.create({
        data: {
            email: 'user1@example.com',
            name: 'User 1',
        },
    });

    const user2 = await prisma.user.create({
        data: {
            email: 'user2@example.com',
            name: 'User 2',
        },
    });

    // Create mock appointments
    const appointment1 = await prisma.appointment.create({
        data: {
            customer: 'Customer 1',
            confirmed: true,
            userId: user1.id,
        },
    });

    const appointment2 = await prisma.appointment.create({
        data: {
            customer: 'Customer 2',
            confirmed: false,
            userId: user2.id,
        },
    });

    // Create mock services
    const service1 = await prisma.service.create({
        data: {
            name: 'Service 1',
            price: 10.99,
            duration: 60,
            appointments: {
                connect: { id: appointment1.id },
            },
        },
    });

    const service2 = await prisma.service.create({
        data: {
            name: 'Service 2',
            price: 19.99,
            duration: 90,
            appointments: {
                connect: { id: appointment2.id },
            },
        },
    });

    console.log('Database seeded successfully!');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });