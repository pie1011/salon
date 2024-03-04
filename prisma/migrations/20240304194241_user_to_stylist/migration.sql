/*
  Warnings:

  - You are about to drop the column `userId` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AppointmentToCustomer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `customerId` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stylistId` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_userId_fkey";

-- DropForeignKey
ALTER TABLE "_AppointmentToCustomer" DROP CONSTRAINT "_AppointmentToCustomer_A_fkey";

-- DropForeignKey
ALTER TABLE "_AppointmentToCustomer" DROP CONSTRAINT "_AppointmentToCustomer_B_fkey";

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "userId",
ADD COLUMN     "customerId" INTEGER NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "stylistId" INTEGER NOT NULL,
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "_AppointmentToCustomer";

-- CreateTable
CREATE TABLE "Stylist" (
    "id" SERIAL NOT NULL,
    "stylisEmail" TEXT NOT NULL,
    "stylistName" TEXT NOT NULL,

    CONSTRAINT "Stylist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stylist_stylisEmail_key" ON "Stylist"("stylisEmail");

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_stylistId_fkey" FOREIGN KEY ("stylistId") REFERENCES "Stylist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
