/*
  Warnings:

  - Added the required column `departmentId` to the `MemoType` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `department` DROP FOREIGN KEY `Department_memoTypeId_fkey`;

-- AlterTable
ALTER TABLE `memotype` ADD COLUMN `departmentId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `MemoType` ADD CONSTRAINT `MemoType_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
