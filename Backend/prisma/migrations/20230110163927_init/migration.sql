-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_userId_fkey";

-- DropForeignKey
ALTER TABLE "subCatagory" DROP CONSTRAINT "subCatagory_userId_fkey";

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subCatagory" ADD CONSTRAINT "subCatagory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
