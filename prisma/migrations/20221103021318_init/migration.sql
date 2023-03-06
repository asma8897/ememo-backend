/*
  Warnings:

  - You are about to drop the column `departmentId` on the `memotype` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[memoTypeId]` on the table `Department` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `memoTypeId` to the `Department` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `memotype` DROP FOREIGN KEY `MemoType_departmentId_fkey`;

-- AlterTable
ALTER TABLE `department` ADD COLUMN `memoTypeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `memotype` DROP COLUMN `departmentId`;

-- CreateIndex
CREATE UNIQUE INDEX `Department_memoTypeId_key` ON `Department`(`memoTypeId`);

-- AddForeignKey
ALTER TABLE `Department` ADD CONSTRAINT `Department_memoTypeId_fkey` FOREIGN KEY (`memoTypeId`) REFERENCES `MemoType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
