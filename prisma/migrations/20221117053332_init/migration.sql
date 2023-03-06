/*
  Warnings:

  - You are about to drop the `_groupuser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_groupuser` DROP FOREIGN KEY `_GroupUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_groupuser` DROP FOREIGN KEY `_GroupUser_B_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `userId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_groupuser`;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Group`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
