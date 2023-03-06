-- AlterTable
ALTER TABLE `company` MODIFY `status` ENUM('ACTIVE', 'DEACTIVE', 'DELETED') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `department` MODIFY `status` ENUM('ACTIVE', 'DEACTIVE', 'DELETED') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
-- ALTER TABLE `memo` MODIFY `status` ENUM('ACTIVE', 'DEACTIVE', 'DELETED') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `memotype` MODIFY `status` ENUM('ACTIVE', 'DEACTIVE', 'DELETED') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `project` MODIFY `status` ENUM('ACTIVE', 'DEACTIVE', 'DELETED') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `user` MODIFY `status` ENUM('ACTIVE', 'DEACTIVE', 'DELETED') NOT NULL DEFAULT 'ACTIVE';
