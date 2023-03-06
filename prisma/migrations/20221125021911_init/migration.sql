/*
  Warnings:

  - Added the required column `userId` to the `MemoApproval` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `memoapproval` ADD COLUMN `createdOn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `MemoApproval` ADD CONSTRAINT `MemoApproval_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
