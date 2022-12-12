-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('SUPERADMIN', 'ADMIN', 'USER');

-- CreateTable
CREATE TABLE "users" (
    "userId" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Address" TEXT,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Role" "Roles" NOT NULL DEFAULT 'USER',

    CONSTRAINT "users_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "product" (
    "ProductId" SERIAL NOT NULL,
    "Description" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Price" TEXT NOT NULL,
    "Store" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "subatCagoryId" INTEGER NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("ProductId")
);

-- CreateTable
CREATE TABLE "cart" (
    "userId" INTEGER NOT NULL,
    "ProductId" INTEGER NOT NULL,
    "cartId" SERIAL NOT NULL,
    "qty" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("cartId")
);

-- CreateTable
CREATE TABLE "payment" (
    "paymentId" SERIAL NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("paymentId")
);

-- CreateTable
CREATE TABLE "receipt" (
    "receipt" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "cartId" INTEGER NOT NULL,
    "ProductId" INTEGER NOT NULL,
    "createAt" INTEGER NOT NULL,

    CONSTRAINT "receipt_pkey" PRIMARY KEY ("receipt")
);

-- CreateTable
CREATE TABLE "subCatagory" (
    "subatCagoryId" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "subCatagory_pkey" PRIMARY KEY ("subatCagoryId")
);

-- CreateTable
CREATE TABLE "catagory" (
    "CagoryId" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "subatCagoryId" INTEGER NOT NULL,

    CONSTRAINT "catagory_pkey" PRIMARY KEY ("CagoryId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_Email_key" ON "users"("Email");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_subatCagoryId_fkey" FOREIGN KEY ("subatCagoryId") REFERENCES "subCatagory"("subatCagoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "product"("ProductId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receipt" ADD CONSTRAINT "receipt_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "product"("ProductId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receipt" ADD CONSTRAINT "receipt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receipt" ADD CONSTRAINT "receipt_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "cart"("cartId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catagory" ADD CONSTRAINT "catagory_subatCagoryId_fkey" FOREIGN KEY ("subatCagoryId") REFERENCES "subCatagory"("subatCagoryId") ON DELETE RESTRICT ON UPDATE CASCADE;
