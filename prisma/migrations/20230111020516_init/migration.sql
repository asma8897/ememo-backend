/*
  Warnings:

  - You are about to drop the column `userId` on the `memo` table. All the data in the column will be lost.
  - You are about to drop the column `groupId` on the `memoapproval` table. All the data in the column will be lost.
  - You are about to drop the column `memoId` on the `memoapproval` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `memoapproval` table. All the data in the column will be lost.
  - You are about to drop the column `memoId` on the `memoattachment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `memoattachment` table. All the data in the column will be lost.
  - You are about to drop the column `memoId` on the `memoccuser` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `memoccuser` table. All the data in the column will be lost.
  - You are about to drop the `_memotouser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_memotouser` DROP FOREIGN KEY `_MemoToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_memotouser` DROP FOREIGN KEY `_MemoToUser_B_fkey`;

-- DropForeignKey
ALTER TABLE `memo` DROP FOREIGN KEY `Memo_userId_fkey`;

-- DropForeignKey
ALTER TABLE `memoapproval` DROP FOREIGN KEY `MemoApproval_groupId_fkey`;

-- DropForeignKey
ALTER TABLE `memoapproval` DROP FOREIGN KEY `MemoApproval_memoId_fkey`;

-- DropForeignKey
ALTER TABLE `memoapproval` DROP FOREIGN KEY `MemoApproval_userId_fkey`;

-- DropForeignKey
ALTER TABLE `memoattachment` DROP FOREIGN KEY `MemoAttachment_memoId_fkey`;

-- DropForeignKey
ALTER TABLE `memoattachment` DROP FOREIGN KEY `MemoAttachment_userId_fkey`;

-- DropForeignKey
ALTER TABLE `memoccuser` DROP FOREIGN KEY `MemoCcUser_memoId_fkey`;

-- DropForeignKey
ALTER TABLE `memoccuser` DROP FOREIGN KEY `MemoCcUser_userId_fkey`;

-- AlterTable
ALTER TABLE `memo` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `memoapproval` DROP COLUMN `groupId`,
    DROP COLUMN `memoId`,
    DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `memoattachment` DROP COLUMN `memoId`,
    DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `memoccuser` DROP COLUMN `memoId`,
    DROP COLUMN `userId`;

-- DropTable
DROP TABLE `_memotouser`;

-- CreateTable
CREATE TABLE `_MemoGroup` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MemoGroup_AB_unique`(`A`, `B`),
    INDEX `_MemoGroup_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_MemoApproval` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MemoApproval_AB_unique`(`A`, `B`),
    INDEX `_MemoApproval_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_MemoAttachment` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MemoAttachment_AB_unique`(`A`, `B`),
    INDEX `_MemoAttachment_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_MemoCcUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MemoCcUser_AB_unique`(`A`, `B`),
    INDEX `_MemoCcUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_MemoCreatedByUserId` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MemoCreatedByUserId_AB_unique`(`A`, `B`),
    INDEX `_MemoCreatedByUserId_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_MemoApprover` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MemoApprover_AB_unique`(`A`, `B`),
    INDEX `_MemoApprover_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_MemoAttachmentCreatedByUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MemoAttachmentCreatedByUser_AB_unique`(`A`, `B`),
    INDEX `_MemoAttachmentCreatedByUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_MemoUserLoop` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MemoUserLoop_AB_unique`(`A`, `B`),
    INDEX `_MemoUserLoop_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_MemoGroup` ADD CONSTRAINT `_MemoGroup_A_fkey` FOREIGN KEY (`A`) REFERENCES `Group`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoGroup` ADD CONSTRAINT `_MemoGroup_B_fkey` FOREIGN KEY (`B`) REFERENCES `MemoApproval`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoApproval` ADD CONSTRAINT `_MemoApproval_A_fkey` FOREIGN KEY (`A`) REFERENCES `Memo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoApproval` ADD CONSTRAINT `_MemoApproval_B_fkey` FOREIGN KEY (`B`) REFERENCES `MemoApproval`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoAttachment` ADD CONSTRAINT `_MemoAttachment_A_fkey` FOREIGN KEY (`A`) REFERENCES `Memo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoAttachment` ADD CONSTRAINT `_MemoAttachment_B_fkey` FOREIGN KEY (`B`) REFERENCES `MemoAttachment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoCcUser` ADD CONSTRAINT `_MemoCcUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Memo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoCcUser` ADD CONSTRAINT `_MemoCcUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `MemoCcUser`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoCreatedByUserId` ADD CONSTRAINT `_MemoCreatedByUserId_A_fkey` FOREIGN KEY (`A`) REFERENCES `Memo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoCreatedByUserId` ADD CONSTRAINT `_MemoCreatedByUserId_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoApprover` ADD CONSTRAINT `_MemoApprover_A_fkey` FOREIGN KEY (`A`) REFERENCES `MemoApproval`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoApprover` ADD CONSTRAINT `_MemoApprover_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoAttachmentCreatedByUser` ADD CONSTRAINT `_MemoAttachmentCreatedByUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `MemoAttachment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoAttachmentCreatedByUser` ADD CONSTRAINT `_MemoAttachmentCreatedByUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoUserLoop` ADD CONSTRAINT `_MemoUserLoop_A_fkey` FOREIGN KEY (`A`) REFERENCES `MemoCcUser`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoUserLoop` ADD CONSTRAINT `_MemoUserLoop_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
