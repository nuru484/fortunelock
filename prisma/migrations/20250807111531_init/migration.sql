-- AlterEnum
ALTER TYPE "public"."Currency" ADD VALUE 'KWD';

-- AlterTable
ALTER TABLE "public"."GoldPrice" ADD COLUMN     "apiTimestamp" BIGINT,
ADD COLUMN     "baseCurrency" TEXT,
ADD COLUMN     "prevPrice" DOUBLE PRECISION,
ADD COLUMN     "price10k" DOUBLE PRECISION,
ADD COLUMN     "price14k" DOUBLE PRECISION,
ADD COLUMN     "price16k" DOUBLE PRECISION,
ADD COLUMN     "price18k" DOUBLE PRECISION,
ADD COLUMN     "price20k" DOUBLE PRECISION,
ADD COLUMN     "price21k" DOUBLE PRECISION,
ADD COLUMN     "price22k" DOUBLE PRECISION,
ADD COLUMN     "price24k" DOUBLE PRECISION,
ADD COLUMN     "weightName" TEXT,
ADD COLUMN     "weightUnit" TEXT;

-- CreateIndex
CREATE INDEX "GoldPrice_currency_recordedAt_idx" ON "public"."GoldPrice"("currency", "recordedAt");

-- CreateIndex
CREATE INDEX "GoldPrice_isActive_recordedAt_idx" ON "public"."GoldPrice"("isActive", "recordedAt");
