/*
  Warnings:

  - The values [GHS,NGN] on the enum `Currency` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."Currency_new" AS ENUM ('USD', 'EUR', 'GBP', 'KWD');
ALTER TABLE "public"."GoldPrice" ALTER COLUMN "currency" DROP DEFAULT;
ALTER TABLE "public"."Payment" ALTER COLUMN "currency" DROP DEFAULT;
ALTER TABLE "public"."Transaction" ALTER COLUMN "currency" DROP DEFAULT;
ALTER TABLE "public"."Wallet" ALTER COLUMN "currency" DROP DEFAULT;
ALTER TABLE "public"."Wallet" ALTER COLUMN "currency" TYPE "public"."Currency_new" USING ("currency"::text::"public"."Currency_new");
ALTER TABLE "public"."GoldPrice" ALTER COLUMN "currency" TYPE "public"."Currency_new" USING ("currency"::text::"public"."Currency_new");
ALTER TABLE "public"."Transaction" ALTER COLUMN "currency" TYPE "public"."Currency_new" USING ("currency"::text::"public"."Currency_new");
ALTER TABLE "public"."Payment" ALTER COLUMN "currency" TYPE "public"."Currency_new" USING ("currency"::text::"public"."Currency_new");
ALTER TYPE "public"."Currency" RENAME TO "Currency_old";
ALTER TYPE "public"."Currency_new" RENAME TO "Currency";
DROP TYPE "public"."Currency_old";
ALTER TABLE "public"."GoldPrice" ALTER COLUMN "currency" SET DEFAULT 'USD';
ALTER TABLE "public"."Payment" ALTER COLUMN "currency" SET DEFAULT 'USD';
ALTER TABLE "public"."Transaction" ALTER COLUMN "currency" SET DEFAULT 'USD';
ALTER TABLE "public"."Wallet" ALTER COLUMN "currency" SET DEFAULT 'USD';
COMMIT;
