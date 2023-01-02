-- DropForeignKey
ALTER TABLE "subCatagory" DROP CONSTRAINT "subCatagory_CategoryId_fkey";

-- AddForeignKey
ALTER TABLE "subCatagory" ADD CONSTRAINT "subCatagory_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES "catagory"("CagoryId") ON DELETE CASCADE ON UPDATE CASCADE;
