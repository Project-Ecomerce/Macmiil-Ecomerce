/*
  Warnings:

  - You are about to drop the column `CategoryId` on the `subCatagory` table. All the data in the column will be lost.
  - Added the required column `CagoryId` to the `subCatagory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "subCatagory" DROP CONSTRAINT "subCatagory_CategoryId_fkey";

-- AlterTable
ALTER TABLE "subCatagory" DROP COLUMN "CategoryId",
ADD COLUMN     "CagoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "subCatagory" ADD CONSTRAINT "subCatagory_CagoryId_fkey" FOREIGN KEY ("CagoryId") REFERENCES "catagory"("CagoryId") ON DELETE CASCADE ON UPDATE CASCADE;
