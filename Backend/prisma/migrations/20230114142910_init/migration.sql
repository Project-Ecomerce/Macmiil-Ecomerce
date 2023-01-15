/*
  Warnings:

  - You are about to drop the column `Description` on the `product` table. All the data in the column will be lost.
  - Made the column `title` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "Description",
ALTER COLUMN "title" SET NOT NULL;
