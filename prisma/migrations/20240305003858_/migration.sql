/*
  Warnings:

  - You are about to drop the column `stylisEmail` on the `Stylist` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stylistEmail]` on the table `Stylist` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `stylistEmail` to the `Stylist` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Stylist_stylisEmail_key";

-- AlterTable
ALTER TABLE "Stylist" DROP COLUMN "stylisEmail",
ADD COLUMN     "stylistEmail" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Stylist_stylistEmail_key" ON "Stylist"("stylistEmail");
