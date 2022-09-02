/*
  Warnings:

  - You are about to drop the column `userId` on the `memoapproval` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `memoapproval` DROP FOREIGN KEY `MemoApproval_userId_fkey`;

-- AlterTable
ALTER TABLE `memoapproval` DROP COLUMN `userId`;
