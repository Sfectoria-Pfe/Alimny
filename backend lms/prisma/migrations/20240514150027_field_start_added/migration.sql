/*
  Warnings:

  - You are about to drop the column `date` on the `agenda` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `agenda` DROP COLUMN `date`,
    ADD COLUMN `start` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
