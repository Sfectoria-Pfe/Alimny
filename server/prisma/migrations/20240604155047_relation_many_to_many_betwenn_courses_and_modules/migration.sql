/*
  Warnings:

  - You are about to drop the column `courseId` on the `module` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `module` DROP FOREIGN KEY `Module_courseId_fkey`;

-- AlterTable
ALTER TABLE `module` DROP COLUMN `courseId`;

-- CreateTable
CREATE TABLE `ModuleCourses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `moduleId` INTEGER NULL,
    `courseId` INTEGER NULL,

    UNIQUE INDEX `ModuleCourses_courseId_moduleId_key`(`courseId`, `moduleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ModuleCourses` ADD CONSTRAINT `ModuleCourses_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModuleCourses` ADD CONSTRAINT `ModuleCourses_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
