/*
  Warnings:

  - The values [TRANSFERENCE] on the enum `TransactionType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to alter the column `amount` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to drop the column `balance` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cnpj` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `companyName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `User` table. All the data in the column will be lost.
  - The required column `id` was added to the `Session` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Changed the type of `accountType` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('INDIVIDUAL', 'CORPORATE');

-- AlterEnum
BEGIN;
CREATE TYPE "TransactionType_new" AS ENUM ('DEPOSIT', 'TRANSFER', 'REVERSAL', 'WITHDRAWAL');
ALTER TABLE "Transaction" ALTER COLUMN "type" TYPE "TransactionType_new" USING ("type"::text::"TransactionType_new");
ALTER TYPE "TransactionType" RENAME TO "TransactionType_old";
ALTER TYPE "TransactionType_new" RENAME TO "TransactionType";
DROP TYPE "TransactionType_old";
COMMIT;

-- DropIndex
DROP INDEX "User_cnpj_key";

-- DropIndex
DROP INDEX "User_cpf_key";

-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "balance",
DROP COLUMN "cnpj",
DROP COLUMN "companyName",
DROP COLUMN "cpf",
DROP COLUMN "accountType",
ADD COLUMN     "accountType" "AccountType" NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- DropEnum
DROP TYPE "AccountTypeEnum";

-- CreateTable
CREATE TABLE "AccountDetails" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cpf" TEXT,
    "cnpj" TEXT,
    "companyName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AccountDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountBalance" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "balance" DECIMAL(65,30) NOT NULL DEFAULT 0.00,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AccountBalance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TransactionToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_TransactionToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "AccountDetails_userId_key" ON "AccountDetails"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AccountDetails_cpf_key" ON "AccountDetails"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "AccountDetails_cnpj_key" ON "AccountDetails"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "AccountBalance_userId_key" ON "AccountBalance"("userId");

-- CreateIndex
CREATE INDEX "_TransactionToUser_B_index" ON "_TransactionToUser"("B");

-- AddForeignKey
ALTER TABLE "AccountDetails" ADD CONSTRAINT "AccountDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountBalance" ADD CONSTRAINT "AccountBalance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TransactionToUser" ADD CONSTRAINT "_TransactionToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TransactionToUser" ADD CONSTRAINT "_TransactionToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
