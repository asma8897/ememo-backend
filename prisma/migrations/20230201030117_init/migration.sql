/*
  Warnings:

  - You are about to drop the `_memoapproval` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_memoapproveruser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_memoattachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_memoattachmentcreatedbyuser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_memoccuser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_memocommentuser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_memocreatedbyuser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_memogroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_memouserloop` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Memo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupId` to the `MemoApproval` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memoId` to the `MemoApproval` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `MemoApproval` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memoId` to the `MemoAttachment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `MemoAttachment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memoId` to the `MemoCcUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `MemoCcUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `MemoComment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_memoapproval` DROP FOREIGN KEY `_MemoApproval_A_fkey`;

-- DropForeignKey
ALTER TABLE `_memoapproval` DROP FOREIGN KEY `_MemoApproval_B_fkey`;

-- DropForeignKey
ALTER TABLE `_memoapproveruser` DROP FOREIGN KEY `_MemoApproverUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_memoapproveruser` DROP FOREIGN KEY `_MemoApproverUser_B_fkey`;

-- DropForeignKey
ALTER TABLE `_memoattachment` DROP FOREIGN KEY `_MemoAttachment_A_fkey`;

-- DropForeignKey
ALTER TABLE `_memoattachment` DROP FOREIGN KEY `_MemoAttachment_B_fkey`;

-- DropForeignKey
ALTER TABLE `_memoattachmentcreatedbyuser` DROP FOREIGN KEY `_MemoAttachmentCreatedByUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_memoattachmentcreatedbyuser` DROP FOREIGN KEY `_MemoAttachmentCreatedByUser_B_fkey`;

-- DropForeignKey
ALTER TABLE `_memoccuser` DROP FOREIGN KEY `_MemoCcUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_memoccuser` DROP FOREIGN KEY `_MemoCcUser_B_fkey`;

-- DropForeignKey
ALTER TABLE `_memocommentuser` DROP FOREIGN KEY `_MemoCommentUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_memocommentuser` DROP FOREIGN KEY `_MemoCommentUser_B_fkey`;

-- DropForeignKey
ALTER TABLE `_memocreatedbyuser` DROP FOREIGN KEY `_MemoCreatedByUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_memocreatedbyuser` DROP FOREIGN KEY `_MemoCreatedByUser_B_fkey`;

-- DropForeignKey
ALTER TABLE `_memogroup` DROP FOREIGN KEY `_MemoGroup_A_fkey`;

-- DropForeignKey
ALTER TABLE `_memogroup` DROP FOREIGN KEY `_MemoGroup_B_fkey`;

-- DropForeignKey
ALTER TABLE `_memouserloop` DROP FOREIGN KEY `_MemoUserLoop_A_fkey`;

-- DropForeignKey
ALTER TABLE `_memouserloop` DROP FOREIGN KEY `_MemoUserLoop_B_fkey`;

-- AlterTable
ALTER TABLE `memo` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `memoapproval` ADD COLUMN `groupId` INTEGER NOT NULL,
    ADD COLUMN `memoId` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `memoattachment` ADD COLUMN `memoId` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `memoccuser` ADD COLUMN `memoId` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `memocomment` ADD COLUMN `userId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_memoapproval`;

-- DropTable
DROP TABLE `_memoapproveruser`;

-- DropTable
DROP TABLE `_memoattachment`;

-- DropTable
DROP TABLE `_memoattachmentcreatedbyuser`;

-- DropTable
DROP TABLE `_memoccuser`;

-- DropTable
DROP TABLE `_memocommentuser`;

-- DropTable
DROP TABLE `_memocreatedbyuser`;

-- DropTable
DROP TABLE `_memogroup`;

-- DropTable
DROP TABLE `_memouserloop`;

-- AddForeignKey
ALTER TABLE `Memo` ADD CONSTRAINT `Memo_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MemoApproval` ADD CONSTRAINT `MemoApproval_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MemoApproval` ADD CONSTRAINT `MemoApproval_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `Group`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MemoApproval` ADD CONSTRAINT `MemoApproval_memoId_fkey` FOREIGN KEY (`memoId`) REFERENCES `Memo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MemoAttachment` ADD CONSTRAINT `MemoAttachment_memoId_fkey` FOREIGN KEY (`memoId`) REFERENCES `Memo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MemoAttachment` ADD CONSTRAINT `MemoAttachment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MemoCcUser` ADD CONSTRAINT `MemoCcUser_memoId_fkey` FOREIGN KEY (`memoId`) REFERENCES `Memo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MemoCcUser` ADD CONSTRAINT `MemoCcUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MemoComment` ADD CONSTRAINT `MemoComment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
