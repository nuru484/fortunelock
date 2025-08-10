-- CreateEnum
CREATE TYPE "public"."AddressType" AS ENUM ('RESIDENTIAL', 'MAILING', 'BUSINESS');

-- CreateEnum
CREATE TYPE "public"."GoldItemType" AS ENUM ('BAR', 'COIN', 'JEWELRY', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."DepositMethod" AS ENUM ('PHYSICAL', 'ONLINE_PURCHASE');

-- CreateEnum
CREATE TYPE "public"."TransactionSource" AS ENUM ('ONLINE', 'PHYSICAL_DEPOSIT');

-- AlterTable
ALTER TABLE "public"."Identity" ADD COLUMN     "expiryDate" TIMESTAMP(3),
ADD COLUMN     "issueDate" TIMESTAMP(3),
ADD COLUMN     "proofOfAddress" TEXT,
ADD COLUMN     "verifiedBy" INTEGER;

-- AlterTable
ALTER TABLE "public"."Transaction" ADD COLUMN     "source" "public"."TransactionSource" NOT NULL DEFAULT 'ONLINE';

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "middleName" TEXT,
ADD COLUMN     "nationality" TEXT,
ADD COLUMN     "phoneNumber" TEXT;

-- CreateTable
CREATE TABLE "public"."Address" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" "public"."AddressType" NOT NULL DEFAULT 'RESIDENTIAL',
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."GoldItem" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "transactionId" INTEGER NOT NULL,
    "type" "public"."GoldItemType" NOT NULL,
    "description" TEXT,
    "serialNumber" TEXT,
    "karat" DOUBLE PRECISION,
    "purity" DOUBLE PRECISION,
    "weightGrams" DOUBLE PRECISION NOT NULL,
    "origin" TEXT,
    "storageLocation" TEXT,
    "depositMethod" "public"."DepositMethod" NOT NULL DEFAULT 'PHYSICAL',
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "verifiedBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GoldItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GoldItem_serialNumber_key" ON "public"."GoldItem"("serialNumber");

-- AddForeignKey
ALTER TABLE "public"."Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."GoldItem" ADD CONSTRAINT "GoldItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."GoldItem" ADD CONSTRAINT "GoldItem_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "public"."Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
