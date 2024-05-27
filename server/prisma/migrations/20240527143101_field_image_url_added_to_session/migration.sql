-- AlterTable
ALTER TABLE `session` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `imageUrl` VARCHAR(191) NULL DEFAULT 'https://media.licdn.com/dms/image/D4E0BAQH8I-kzQdsUXg/company-logo_200_200/0/1698062214267/sfectoria_logo?e=2147483647&v=beta&t=-FocSdGYCvAW7rmL_dPMHj9GYFN11yEm1CM0JwZYdIk';
