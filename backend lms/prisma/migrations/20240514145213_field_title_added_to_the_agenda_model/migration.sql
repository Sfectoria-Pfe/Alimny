/*
  Warnings:

  - Added the required column `title` to the `Agenda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `agenda` ADD COLUMN `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
