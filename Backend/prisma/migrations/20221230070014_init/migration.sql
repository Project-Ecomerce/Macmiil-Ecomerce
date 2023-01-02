-- DropForeignKey
ALTER TABLE "payment" DROP CONSTRAINT "payment_ProductId_fkey";

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "product"("ProductId") ON DELETE CASCADE ON UPDATE CASCADE;
