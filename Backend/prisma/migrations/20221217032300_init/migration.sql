-- AlterTable
ALTER TABLE "catagory" ALTER COLUMN "userId" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "subCatagory" ALTER COLUMN "CategoryId" SET DEFAULT 1;

-- CreateTable
CREATE TABLE "cart" (
    "cartId" SERIAL NOT NULL,
    "qty" INTEGER NOT NULL DEFAULT 1,
    "userId" INTEGER NOT NULL,
    "ProductId" INTEGER NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("cartId")
);

-- CreateTable
CREATE TABLE "payment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createAt" INTEGER NOT NULL,
    "is_paid" BOOLEAN NOT NULL DEFAULT false,
    "is_deliveredn" BOOLEAN NOT NULL DEFAULT false,
    "ProductId" INTEGER NOT NULL,
    "cartId" INTEGER NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "product"("ProductId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "product"("ProductId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "cart"("cartId") ON DELETE RESTRICT ON UPDATE CASCADE;
