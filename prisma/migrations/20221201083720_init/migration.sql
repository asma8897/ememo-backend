/*
  Warnings:

  - You are about to drop the column `userId` on the `group` table. All the data in the column will be lost.
  - Added the required column `groupId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `group` DROP FOREIGN KEY `Group_userId_fkey`;

-- AlterTable
ALTER TABLE `group` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `groupId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `Group`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
