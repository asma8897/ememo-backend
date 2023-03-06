/*
  Warnings:

  - You are about to drop the column `memoStatus` on the `memoapproval` table. All the data in the column will be lost.
  - Added the required column `memoStatusId` to the `MemoApproval` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `memoapproval` DROP COLUMN `memoStatus`,
    ADD COLUMN `memoStatusId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `MemoStatus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MemoApproval` ADD CONSTRAINT `MemoApproval_memoStatusId_fkey` FOREIGN KEY (`memoStatusId`) REFERENCES `MemoStatus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
