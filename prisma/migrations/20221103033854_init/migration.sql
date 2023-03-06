/*
  Warnings:

  - You are about to drop the column `memoTypeId` on the `department` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Department_memoTypeId_key` ON `department`;

-- AlterTable
ALTER TABLE `department` DROP COLUMN `memoTypeId`;
