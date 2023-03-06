/*
  Warnings:

  - You are about to drop the column `status` on the `memo` table. All the data in the column will be lost.
  - Added the required column `memoStatusId` to the `Memo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
-- ALTER TABLE `memo` DROP COLUMN `status`,
--     ADD COLUMN `memoStatusId` INTEGER NOT NULL;

-- AddForeignKey
-- ALTER TABLE `Memo` ADD CONSTRAINT `Memo_memoStatusId_fkey` FOREIGN KEY (`memoStatusId`) REFERENCES `MemoStatus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
