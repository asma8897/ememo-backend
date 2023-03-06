/*
  Warnings:

  - You are about to drop the column `groupId` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_groupId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `groupId`;

-- CreateTable
CREATE TABLE `_UserGroup` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_UserGroup_AB_unique`(`A`, `B`),
    INDEX `_UserGroup_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_UserGroup` ADD CONSTRAINT `_UserGroup_A_fkey` FOREIGN KEY (`A`) REFERENCES `Group`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserGroup` ADD CONSTRAINT `_UserGroup_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
