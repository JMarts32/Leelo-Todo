/*
  Warnings:

  - You are about to drop the `saleBook` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "saleBook" DROP CONSTRAINT "saleBook_bookId_fkey";

-- DropForeignKey
ALTER TABLE "saleBook" DROP CONSTRAINT "saleBook_saleId_fkey";

-- DropTable
DROP TABLE "saleBook";

-- CreateTable
CREATE TABLE "SaleBook" (
    "id" SERIAL NOT NULL,
    "saleId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalBookPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SaleBook_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SaleBook" ADD CONSTRAINT "SaleBook_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleBook" ADD CONSTRAINT "SaleBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
