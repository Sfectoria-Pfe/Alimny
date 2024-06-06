/*
  Warnings:

  - You are about to drop the column `msgsId` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_msgsId_fkey`;

-- AlterTable
ALTER TABLE `msgs` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `senderId` INTEGER NULL,
    ADD COLUMN `text` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `msgsId`;

-- AddForeignKey
ALTER TABLE `Msgs` ADD CONSTRAINT `Msgs_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
