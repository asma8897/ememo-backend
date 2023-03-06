/*
  Warnings:

  - You are about to drop the `_memoapprover` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_memocreatedbyuserid` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_memoapprover` DROP FOREIGN KEY `_MemoApprover_A_fkey`;

-- DropForeignKey
ALTER TABLE `_memoapprover` DROP FOREIGN KEY `_MemoApprover_B_fkey`;

-- DropForeignKey
ALTER TABLE `_memocreatedbyuserid` DROP FOREIGN KEY `_MemoCreatedByUserId_A_fkey`;

-- DropForeignKey
ALTER TABLE `_memocreatedbyuserid` DROP FOREIGN KEY `_MemoCreatedByUserId_B_fkey`;

-- DropTable
DROP TABLE `_memoapprover`;

-- DropTable
DROP TABLE `_memocreatedbyuserid`;

-- CreateTable
CREATE TABLE `_MemoCreatedByUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MemoCreatedByUser_AB_unique`(`A`, `B`),
    INDEX `_MemoCreatedByUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_MemoApproverUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MemoApproverUser_AB_unique`(`A`, `B`),
    INDEX `_MemoApproverUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_MemoCreatedByUser` ADD CONSTRAINT `_MemoCreatedByUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Memo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoCreatedByUser` ADD CONSTRAINT `_MemoCreatedByUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoApproverUser` ADD CONSTRAINT `_MemoApproverUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `MemoApproval`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoApproverUser` ADD CONSTRAINT `_MemoApproverUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
