/*
  Warnings:

  - You are about to drop the column `userId` on the `subCatagory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "subCatagory" DROP CONSTRAINT "subCatagory_userId_fkey";

-- AlterTable
ALTER TABLE "subCatagory" DROP COLUMN "userId";
