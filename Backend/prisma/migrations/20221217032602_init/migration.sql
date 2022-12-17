-- DropIndex
DROP INDEX "product_subatCagoryId_key";

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "subatCagoryId" SET DEFAULT 1;
