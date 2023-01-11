-- DropForeignKey
ALTER TABLE "catagory" DROP CONSTRAINT "catagory_userId_fkey";

-- AddForeignKey
ALTER TABLE "catagory" ADD CONSTRAINT "catagory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
