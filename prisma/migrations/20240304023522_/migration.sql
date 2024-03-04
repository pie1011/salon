/*
  Warnings:

  - You are about to drop the column `customer` on the `Appointment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "customer";

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "ccard" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AppointmentToCustomer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AppointmentToCustomer_AB_unique" ON "_AppointmentToCustomer"("A", "B");

-- CreateIndex
CREATE INDEX "_AppointmentToCustomer_B_index" ON "_AppointmentToCustomer"("B");

-- AddForeignKey
ALTER TABLE "_AppointmentToCustomer" ADD CONSTRAINT "_AppointmentToCustomer_A_fkey" FOREIGN KEY ("A") REFERENCES "Appointment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentToCustomer" ADD CONSTRAINT "_AppointmentToCustomer_B_fkey" FOREIGN KEY ("B") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
