-- AddForeignKey
ALTER TABLE `Memo` ADD CONSTRAINT `Memo_memoStatusId_fkey` FOREIGN KEY (`memoStatusId`) REFERENCES `MemoStatus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
