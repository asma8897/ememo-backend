/*
  Warnings:

  - You are about to drop the column `projectId` on the `memo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `memo` DROP FOREIGN KEY `Memo_projectId_fkey`;

-- AlterTable
ALTER TABLE `memo` DROP COLUMN `projectId`;

-- CreateTable
CREATE TABLE `_MemoProject` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MemoProject_AB_unique`(`A`, `B`),
    INDEX `_MemoProject_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_MemoProject` ADD CONSTRAINT `_MemoProject_A_fkey` FOREIGN KEY (`A`) REFERENCES `Memo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoProject` ADD CONSTRAINT `_MemoProject_B_fkey` FOREIGN KEY (`B`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
