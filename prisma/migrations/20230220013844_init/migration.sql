-- DropForeignKey
ALTER TABLE `memoapproval` DROP FOREIGN KEY `MemoApproval_memoId_fkey`;

-- CreateTable
CREATE TABLE `_MemoApprover` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MemoApprover_AB_unique`(`A`, `B`),
    INDEX `_MemoApprover_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_MemoApprover` ADD CONSTRAINT `_MemoApprover_A_fkey` FOREIGN KEY (`A`) REFERENCES `Memo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemoApprover` ADD CONSTRAINT `_MemoApprover_B_fkey` FOREIGN KEY (`B`) REFERENCES `MemoApproval`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
