/*
  Warnings:

  - You are about to drop the `Org` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Org" DROP CONSTRAINT "Org_ownerId_fkey";

-- DropTable
DROP TABLE "Org";
