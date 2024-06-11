-- CreateTable
CREATE TABLE `Programme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `categoryId` INTEGER NOT NULL,

    UNIQUE INDEX `Programme_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gouvernorat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Gouvernorat_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CourseContent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('pdf', 'video', 'quiz', 'exercice') NOT NULL,
    `courseId` INTEGER NULL,
    `questionsId` INTEGER NULL,
    `path` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `imageUrl` VARCHAR(191) NULL DEFAULT 'https://media.licdn.com/dms/image/D4E0BAQH8I-kzQdsUXg/company-logo_200_200/0/1698062214267/sfectoria_logo?e=2147483647&v=beta&t=-FocSdGYCvAW7rmL_dPMHj9GYFN11yEm1CM0JwZYdIk',
    `programmeId` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Session_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Category_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SessionStudent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sessionId` INTEGER NULL,
    `studentId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Msgs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sessionId` INTEGER NOT NULL,
    `text` VARCHAR(191) NULL,
    `senderId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SessionTeacher` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sessionId` INTEGER NULL,
    `employeeId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Weeks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `sessionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProgrammeModule` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `programmeId` INTEGER NULL,
    `moduleId` INTEGER NULL,

    UNIQUE INDEX `ProgrammeModule_programmeId_moduleId_key`(`programmeId`, `moduleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Module` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Module_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WeekContent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `weeksId` INTEGER NULL,
    `courseContentId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModuleCourses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `moduleId` INTEGER NULL,
    `courseId` INTEGER NULL,

    UNIQUE INDEX `ModuleCourses_courseId_moduleId_key`(`courseId`, `moduleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `isStudent` BOOLEAN NOT NULL,
    `imageUrl` VARCHAR(191) NULL,
    `role` ENUM('admin', 'teacher', 'manager', 'student') NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `studentId` INTEGER NULL,
    `employeeId` INTEGER NULL,
    `aboutMe` VARCHAR(191) NULL,
    `gouvernoratId` INTEGER NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(191) NOT NULL,
    `LastName` VARCHAR(191) NOT NULL,
    `isAdmin` BOOLEAN NOT NULL,

    UNIQUE INDEX `Employee_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Questions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `correction` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StudentResponse` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `response` VARCHAR(191) NOT NULL,
    `score` INTEGER NOT NULL,
    `studentId` INTEGER NULL,
    `questionsId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StudentBadge` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullpack` VARCHAR(191) NOT NULL,
    `month` DATETIME(3) NOT NULL,
    `isMonthly` BOOLEAN NOT NULL,
    `studentId` INTEGER NULL,
    `badgeId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Badge` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Badge_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Agenda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `start` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(191) NOT NULL,
    `LastName` VARCHAR(191) NOT NULL,
    `isAdmin` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Programme` ADD CONSTRAINT `Programme_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CourseContent` ADD CONSTRAINT `CourseContent_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CourseContent` ADD CONSTRAINT `CourseContent_questionsId_fkey` FOREIGN KEY (`questionsId`) REFERENCES `Questions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_programmeId_fkey` FOREIGN KEY (`programmeId`) REFERENCES `Programme`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SessionStudent` ADD CONSTRAINT `SessionStudent_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `Session`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SessionStudent` ADD CONSTRAINT `SessionStudent_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Msgs` ADD CONSTRAINT `Msgs_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `Session`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Msgs` ADD CONSTRAINT `Msgs_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SessionTeacher` ADD CONSTRAINT `SessionTeacher_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `Session`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SessionTeacher` ADD CONSTRAINT `SessionTeacher_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Weeks` ADD CONSTRAINT `Weeks_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `Session`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProgrammeModule` ADD CONSTRAINT `ProgrammeModule_programmeId_fkey` FOREIGN KEY (`programmeId`) REFERENCES `Programme`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProgrammeModule` ADD CONSTRAINT `ProgrammeModule_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WeekContent` ADD CONSTRAINT `WeekContent_weeksId_fkey` FOREIGN KEY (`weeksId`) REFERENCES `Weeks`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WeekContent` ADD CONSTRAINT `WeekContent_courseContentId_fkey` FOREIGN KEY (`courseContentId`) REFERENCES `CourseContent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModuleCourses` ADD CONSTRAINT `ModuleCourses_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModuleCourses` ADD CONSTRAINT `ModuleCourses_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_gouvernoratId_fkey` FOREIGN KEY (`gouvernoratId`) REFERENCES `Gouvernorat`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentResponse` ADD CONSTRAINT `StudentResponse_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentResponse` ADD CONSTRAINT `StudentResponse_questionsId_fkey` FOREIGN KEY (`questionsId`) REFERENCES `Questions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentBadge` ADD CONSTRAINT `StudentBadge_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentBadge` ADD CONSTRAINT `StudentBadge_badgeId_fkey` FOREIGN KEY (`badgeId`) REFERENCES `Badge`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
