/*
  Warnings:

  - A unique constraint covering the columns `[departmentId]` on the table `MemoType` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `departmentId` to the `MemoType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `memotype` ADD COLUMN `departmentId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `MemoType_departmentId_key` ON `MemoType`(`departmentId`);

-- AddForeignKey
ALTER TABLE `MemoType` ADD CONSTRAINT `MemoType_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
