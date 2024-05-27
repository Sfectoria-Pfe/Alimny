-- AlterTable
ALTER TABLE `user` ADD COLUMN `gouvernoratId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_gouvernoratId_fkey` FOREIGN KEY (`gouvernoratId`) REFERENCES `Gouvernorat`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
